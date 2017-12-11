import {LocalData} from './local-data';
import {RemoteData} from './remote-data';
import { HttpClient } from '@angular/common/http';


export function localDataFactory () {
    return () => {
        return new LocalData();
    };
}

export function remoteDataFactory (http: HttpClient) {
    return () => {
        return new RemoteData(http);
    };
}

export let LocalDataFactoryProvider = {provide: LocalData, useFactory: localDataFactory};
export let RemoteDataFactoryProvider = {provide: RemoteData, useFactory: remoteDataFactory, deps: [HttpClient]};
