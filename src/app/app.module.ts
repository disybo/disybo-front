import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule }    from './core/core.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  exports: [ AppComponent ],
  entryComponents: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
