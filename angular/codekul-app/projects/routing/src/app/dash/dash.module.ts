import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { OkayComponent } from './okay.component';
import { GoodComponent } from './good.component';

@NgModule({
  declarations: [
    DashComponent,
    OkayComponent,
    GoodComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class DashModule { }
