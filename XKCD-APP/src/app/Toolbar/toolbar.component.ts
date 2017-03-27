import { XKCDService } from './../XKCD.service';
import { DisplayComicComponent } from './../DisplayComic/displayComic.component';
import { MyButtonComponent } from './../Button/button.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  title = '';
  myjsondata = {};

  constructor (private xkcdService: XKCDService) {}

  ngOnInit() { this.getComic(); }

  getComic() {
      this.xkcdService.getComic().then((data) => {
      this.myjsondata = data;
      this.title = data.title;
    });
  }




}
