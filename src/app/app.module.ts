import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from "app/tab2/tab2.component";
import { HomeComponent } from './routing_page/home/home.component';
import { Routing } from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    Tab1Component,
    Tab2Component,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
