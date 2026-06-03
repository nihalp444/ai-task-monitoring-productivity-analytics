import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { TaskComponent } from './task/task';
import { TaskCreateComponent } from './task-create/task-create';
import { SignupComponent } from './signup/signup';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile';

const routes: Routes = [

{ path:'', component:LoginComponent },
{ path:'signup', component:SignupComponent },
{ path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard] },
{ path:'tasks', component:TaskComponent, canActivate:[AuthGuard] },
{ path:'tasks/create', component:TaskCreateComponent, canActivate:[AuthGuard] },
{ path:'profile', component:ProfileComponent, canActivate:[AuthGuard] }

];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}