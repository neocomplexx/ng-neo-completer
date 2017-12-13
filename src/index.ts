import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CompleterCmp } from './components/completer-cmp';
import { CompleterListItemCmp } from './components/completer-list-item-cmp';
import { CompleterService } from './services/completer-service';
import { NeoCompleterService } from './neo.completer.service';

import { localDataFactory, remoteDataFactory,
   LocalDataFactoryProvider, RemoteDataFactoryProvider } from './services/completer-data-factory';
import { CtrCompleter } from './directives/ctr-completer';
import { CtrDropdown } from './directives/ctr-dropdown';
import { CtrInput } from './directives/ctr-input';
import { CtrList } from './directives/ctr-list';
import { CtrRow } from './directives/ctr-row';
import {CompleterData} from './services/completer-data';
import {CompleterItem} from './components/completer-item'; 
import {LocalData} from './services/local-data';
import {RemoteData} from './services/remote-data';
import {CompleterBaseData} from './services/completer-base-data';

export * from './components/completer-cmp';
export * from './components/completer-list-item-cmp';
export * from './directives/ctr-completer';
export * from './directives/ctr-dropdown';
export * from './directives/ctr-input';
export * from './directives/ctr-list';
export * from './directives/ctr-row';
export * from './services/completer-data';
export * from './services/completer-service';
export * from './neo.completer.service';

export {CompleterData} from './services/completer-data';
export {CompleterItem} from './components/completer-item';
export {LocalData} from './services/local-data';
export {RemoteData} from './services/remote-data';
export {CompleterBaseData} from './services/completer-base-data';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    CompleterListItemCmp,
    CtrCompleter,
    CtrDropdown,
    CtrInput,
    CtrList,
    CtrRow,
    CompleterCmp,
  ],
  exports: [
    CompleterCmp,
    CompleterListItemCmp,
    CtrCompleter,
    CtrDropdown,
    CtrInput,
    CtrList,
    CtrRow
  ]
})
export class NeoCompleterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NeoCompleterModule,
      providers: [
        CompleterService,
        LocalDataFactoryProvider,
        RemoteDataFactoryProvider,
      ]
    };
  }
}
