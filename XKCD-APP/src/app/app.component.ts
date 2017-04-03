import { Component, OnInit } from '@angular/core';
import { LoaderService } from './Spinner/Spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    objLoaderStatus: boolean;

    constructor(
        private loaderService: LoaderService) {
        this.objLoaderStatus = false;
    }

    ngOnInit() {
        this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });

    }
}
