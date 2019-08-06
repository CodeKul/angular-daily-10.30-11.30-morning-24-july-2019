import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TdComponent } from './td/td.component';
import { DdComponent } from './dd/dd.component';

@NgModule({
  declarations: [
    AppComponent,
    TdComponent,
    DdComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, //template driven
    ReactiveFormsModule //data driven
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
