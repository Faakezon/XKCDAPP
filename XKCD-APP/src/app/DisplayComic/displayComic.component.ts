import { Component, OnInit } from '@angular/core';
import { XkcdComic } from '../xkcdComic';
import { XKCDService } from '../XKCD.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'displayComicComponent',
  template: './displayComic.component.html',

})


export class DisplayComicComponent {

    constructor(private xkcdService: XKCDService) {}

  ngOnInit(): void {
    this.xkcdService.getComic();
  }
}
