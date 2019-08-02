import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { NmComponent } from './nm.component';
import { InpComponent } from './inp.component';
import { ColComponent } from './col.component';

@NgModule({
  declarations: [
    AppComponent,
    NmComponent,
    InpComponent,
    ColComponent
  ],
  imports: [
    BrowserModule
  ],
  // providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
