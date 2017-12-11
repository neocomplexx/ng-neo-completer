# ng-neo-completer

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

// Import your library
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
```

## License

MIT © [Neocomplexx](mailto:info@neocomplexx.com)
