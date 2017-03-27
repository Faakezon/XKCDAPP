import { Component, OnInit } from '@angular/core';
import { XkcdComic } from '../xkcdComic';
import { XKCDService } from '../XKCD.service';

@Component({
  selector: 'app-displayComic-component',
  templateUrl: './displayComic.component.html'

})


export class DisplayComicComponent implements OnInit {
  myjsondata: {};
  title = '';
  img = '';

  constructor (private xkcdService: XKCDService) {}

  ngOnInit() { this.getComic(); }


  getComic() {
      this.xkcdService.getComic().then((data) => {
        console.log('What is in the data ', data);
      this.myjsondata = data;
      this.img = data.img;
    });
  }


Z

}

