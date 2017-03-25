import {Component} from '@angular/core';
import { MdButton } from '@angular/material';

@Component({
  selector: 'toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  title = 'XKCD COMIC NAME';
}
