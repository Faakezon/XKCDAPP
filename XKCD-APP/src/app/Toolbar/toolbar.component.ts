import { MyButtonComponent } from './../Button/button.component';
import {Component} from '@angular/core';
import { XKCDService } from '../XKCD.service';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  title = 'XKCD COMIC NAME';

  constructor(private xkcdService: XKCDService) {}
  ngOnInit(): void {
    this.xkcdService.getComic();
  }



}
