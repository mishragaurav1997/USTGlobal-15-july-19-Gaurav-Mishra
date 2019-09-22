import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddTaskComponent,
    ViewtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'add',component:AddTaskComponent},
      {path:'view',component:ViewtaskComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
