import { MyButtonComponent } from './../Button/button.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  title = '';



  //constructor (private xkcdService: XKCDService) {}



  //ngOnInit() { this.getComic(); }

/*
  getComic() {
      this.xkcdService.getComic().then((data) => {
      this.myjsondata = data;
      this.title = data.title;
    });
  }
*/

  getRandomComic() {
    console.log('Random Comic');
    //this.xkcdService.getRandomComic().then((data) => {
      //this.myjsondata = data;
      //this.title = data.title;
    //});
  }


}
