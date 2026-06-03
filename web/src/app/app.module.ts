import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login';
import { AppComponent } from './app.component/app.component';
import { DashboardComponent } from './dashboard/dashboard';
import { TaskComponent } from './task/task';
import { TaskCreateComponent } from './task-create/task-create';
import { SignupComponent } from './signup/signup';
import { ProfileComponent } from './profile/profile';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    TaskComponent,
    TaskCreateComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }