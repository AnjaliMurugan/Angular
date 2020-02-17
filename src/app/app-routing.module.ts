import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

const routes:Routes = [
  {path:'',redirectTo:'/dashboards/dashboard',pathMatch:'full'},
  { path: 'authentication', loadChildren: "./authentication/authentication.module#AuthenticationModule" },
  { path: 'dashboards', loadChildren: "./dashboards/dashboards.module#DashboardsModule" },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
