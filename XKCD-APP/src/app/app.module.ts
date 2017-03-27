import { DisplayComicComponent } from './DisplayComic/displayComic.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { ToolbarComponent } from './Toolbar/toolbar.component';
import { MyButtonComponent } from './Button/button.component';
import { HttpModule, JsonpModule } from '@angular/http';

import { XKCDService } from './XKCD.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MyButtonComponent,
    DisplayComicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    JsonpModule,


  ],
  providers: [ XKCDService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
