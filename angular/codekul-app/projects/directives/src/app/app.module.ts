import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { SizerDirective } from './sizer.directive';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    SizerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
