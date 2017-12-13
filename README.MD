# ng-neo-completer
Autocomplete with object instead of strings

## Installation

To install this library, run:

```bash
$ npm install ng-neo-completer --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library
import { NeoCompleterModule } from 'ng-neo-completer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    NeoCompleterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Import in child modules for use components
import { NeoCompleterModule } from 'ng-neo-completer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    NeoCompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ChildModule { }

// Import NeoCompleterService and use it with DTO
import { NeoCompleterService } from 'ng-neo-completer';

protected concreteCompleterService: NeoCompleterService<ConcreteDTO>;
```

## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
