import { MasterPageComponent } from './MasterPage/masterPage';
import { LoaderService } from './Spinner/Spinner.service';
import { DisplayComicComponent } from './DisplayComic/displayComic.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule, MdButtonModule } from '@angular/material';
import { MyButtonComponent } from './Button/button.component';
import { HttpModule, JsonpModule } from '@angular/http';

import { XKCDService } from './XKCD.service';
import { NglModule } from 'ng-lightning/ng-lightning';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    DisplayComicComponent,
    MasterPageComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    JsonpModule,
    NglModule,
    MdButtonModule,

    RouterModule.forRoot([
    {
      path: 'comic',
      component: MasterPageComponent
    },
    {
      path: '',
      redirectTo: 'comic', //comic/:id
      pathMatch: 'full'
    }

  ])


  ],
  providers: [ XKCDService, LoaderService, DisplayComicComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
