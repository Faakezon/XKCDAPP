import { Component, OnInit } from '@angular/core';
import { XkcdComic } from '../xkcdComic';
import { XKCDService } from '../XKCD.service';

@Component({
  selector: 'app-displayComic-component',
  template: './displayComic.component.html'

})


export class DisplayComicComponent implements OnInit {
  comic: {};

  constructor (private xkcdService: XKCDService) {}

  ngOnInit() { this.getComic(); }


  /*getComic() {
      this.xkcdService.getData().subscribe((data) => {
        console.log('What is in the data ', data);
      this.myjsondata = data;
      });
  }*/


  getComic() {
    this.xkcdService.getComic().then(comic => this.comic = comic);
  }

}

