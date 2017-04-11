import { XkcdComic } from './../xkcdComic';
import { Component, OnInit } from '@angular/core';
import { DisplayComicComponent } from './../DisplayComic/displayComic.component';
import { XKCDService } from './../XKCD.service';


@Component({
  selector: 'masterPage-component',
  templateUrl: './masterpage.html',
  providers: [XKCDService]
})

export class MasterPageComponent implements OnInit {
  id: number;

  masterTitle: string = '';
  masterImg: string = '';

  constructor (private xkcdService: XKCDService, private display: DisplayComicComponent) {
  }


  ngOnInit() {
  this.display.setSpinner(true);
  this.xkcdService.getLatencyComic().then((data) => {
      this.id = data.num;
      this.masterTitle = data.title;
      this.masterImg = data.img;
      this.display.setSpinner(false);
    });
  }

  randomComic() {
  this.display.setSpinner(true);
  this.xkcdService.getLatencyRandomComic().then((data) => {
      this.id = data.num;
      this.masterTitle = data.title;
      this.masterImg = data.img;
      this.display.setSpinner(false);
    });
  }


}
