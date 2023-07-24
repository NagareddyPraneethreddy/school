import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CreateComponent } from './create/create.component';
import { authenticationGuard } from './authentication.guard';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'student',component:StudentComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'create',component:CreateComponent},

  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
