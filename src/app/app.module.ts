import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { AddEditTaskComponent } from './task/add-edit-task/add-edit-task.component';
import {SharedService} from './shared.service';

// import HTTP client to work with request/response
import {HttpClientModule, HttpClient } from '@angular/common/http';
// import form module for form handling
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


// other imports


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ShowTaskComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
