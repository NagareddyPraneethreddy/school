import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashbord',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'student',component:StudentComponent},
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
