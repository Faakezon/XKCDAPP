import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from '@angular/material';
import {ToolbarComponent} from './Toolbar/toolbar.component';
import { MyButtonComponent } from './Button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MyButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
