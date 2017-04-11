import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { XkcdComic } from '../xkcdComic';
import { LoaderService } from './../Spinner/Spinner.service';
import { MyButtonComponent } from './../Button/button.component';

@Component({
  selector: 'app-displayComic-component',
  templateUrl: './displayComic.component.html',
  styleUrls: ['./displayComic.component.css']
})


export class DisplayComicComponent implements OnInit {

  @Input('masterTitle') _title: string;
  @Input('masterImg') _img: string;

  @Output() randomComic = new EventEmitter<any>();


  objLoaderStatus: boolean;

  constructor (private loaderService: LoaderService) {
        this.objLoaderStatus = false;
    }


  ngOnInit() {
        this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
        this.loaderService.displayLoader(true); // enable spinner
 }

 public setSpinner(bool: boolean) {
   this.loaderService.displayLoader(bool);
 }


 getRandomComic() {
    console.log('Random Comic');
    this.randomComic.emit();
  }

/*
  getComic() {
      this.xkcdService.getComic().then((data) => {
      this.myjsondata = data;
      this.img = data.img;
      this.loaderService.displayLoader(false);
    });
  }

  getJsonData() {
    return this.myjsondata;
  }

*/

}

