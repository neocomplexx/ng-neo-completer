import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CompleterBaseData } from './completer-base-data';
import { CompleterItem } from '../components/completer-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class RemoteData extends CompleterBaseData {
    public dataSourceChange: EventEmitter<void> = new EventEmitter<void>();

    private _remoteUrl: string;
    private remoteSearch: Subscription;
    private _urlFormater: ((term: string) => string) | null = null;
    private _dataField: string | null = null;
    private _headers: HttpHeaders;


    constructor(private http: HttpClient) {
        super();
    }

    public remoteUrl(remoteUrl: string) {
        this._remoteUrl = remoteUrl;
        this.dataSourceChange.emit();

        return this;
    }

    public urlFormater(urlFormater: (term: string) => string) {
        this._urlFormater = urlFormater;
    }

    public dataField(dataField: string) {
        this._dataField = dataField;
    }

    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     */
    public headers(headers: HttpHeaders) {
        this._headers = headers;
    }

    public search(term: string): void {
        this.cancel();
        // let params = {};
        let url = '';
        if (this._urlFormater) {
            url = this._urlFormater(term);
        } else {
            url = this._remoteUrl + encodeURIComponent(term);
        }

        /*
         * If requestOptions are provided, they will override anything set in headers.
         *
         * If no requestOptions are provided, a new RequestOptions object will be instantiated,
         * and either the provided headers or a new Headers() object will be sent.
         */
        if (!this._headers) {
            this._headers = new HttpHeaders();
        }

        this.remoteSearch = this.http.get(url, { headers: this._headers})
            .map((res: Object) => res)
            .map((data: any) => {
                let matches = this.extractValue(data, this._dataField);
                return this.extractMatches(matches, term);
            })
            .catch(() => [])
            .subscribe((matches: any[]) => {
                let results = this.processResults(matches);
                this.next(results);
            });
    }

    public cancel() {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    }

    public convertToItem(data: any): CompleterItem | null {
        return super.convertToItem(data);
    }
}
