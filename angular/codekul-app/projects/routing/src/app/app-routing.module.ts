import { MyGuard } from './dash/my.guard';
import { GoodComponent } from './dash/good.component';
import { OkayComponent } from './dash/okay.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { DashComponent } from './dash/dash.component';

const dashRoutes = [
  { path: 'okay', component: OkayComponent },
  { path: 'good', component: GoodComponent }
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash/:usNm', component: DashComponent, children: dashRoutes, canActivate: [MyGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
