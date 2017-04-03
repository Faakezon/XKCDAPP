import { LoaderService } from './Spinner/Spinner.service';
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
import { NglModule } from 'ng-lightning/ng-lightning';


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
    NglModule


  ],
  providers: [ XKCDService, LoaderService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
