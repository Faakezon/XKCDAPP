import { Component, OnInit } from '@angular/core';
import { XkcdComic } from '../xkcdComic';
import { XKCDService } from '../XKCD.service';
import { LoaderService } from './../Spinner/Spinner.service';

@Component({
  selector: 'app-displayComic-component',
  templateUrl: './displayComic.component.html',
  styleUrls: ['./displayComic.component.css']


})


export class DisplayComicComponent implements OnInit {
  myjsondata: {};
  title = '';
  img = '';
  objLoaderStatus: boolean;


  constructor (private xkcdService: XKCDService, private loaderService: LoaderService) {
        this.objLoaderStatus = false;
    }

  ngOnInit() {
        this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
        this.loaderService.displayLoader(true); // enable spinner
        this.getComic();
 }


  getComic() {
      this.xkcdService.getLatencyComic().then((data) => {
      this.myjsondata = data;
      this.img = data.img;
      this.loaderService.displayLoader(false);
    });
  }


Z

}

