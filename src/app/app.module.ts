import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from "app/tab2/tab2.component";
import { HomeComponent } from './routing_page/home/home.component';
import { Routing } from "app/app.routing";
import { LoginGuard } from "app/shared/guards/login.guard";
import { LoginComponent } from './forms/login/login.component';
import { RegisterTempComponent } from './forms/template-driven/register-temp/register-temp.component';
import { RegisterModelComponent } from './forms/model-driven/register-model/register-model.component';

@NgModule({
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component,
    HomeComponent,
    LoginComponent,
    RegisterTempComponent,
    RegisterModelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
