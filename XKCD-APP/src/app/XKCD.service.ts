import { Observable } from 'rxjs/Observable';
import { XkcdComic } from './xkcdComic';
import { Injectable, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class XKCDService implements OnInit{
  private comicUrl = 'http://crossorigin.me/http://xkcd.com/info.0.json';  // URL to web API
  private randomComicUrl = 'http://crossorigin.me/http://c.xkcd.com/random/comic/';
  constructor (private http: Http) {}

  jsonData = {};

 ngOnInit() {

 }

  createRandomComicUrl(): string {
    let url = 'http://crossorigin.me/' + 'http://xkcd.com/' + this.createRandomNumberForUrl() + '/info.0.json';
    console.log(url);
    return url;
  }

  createRandomNumberForUrl(): number {
    let nr = Math.floor(Math.random() * (500 - 1 + 1) + 1);
    console.log(nr);
    return nr;
  }


  getComic (): Promise<XkcdComic> {
  return this.http.get(this.comicUrl)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}

getLatencyComic(): Promise<XkcdComic> {
  return new Promise(resolve => {setTimeout(() => resolve(this.getComic()), 2000);
  });
}

getRandomComic(): Promise<XkcdComic> {
  return this.http.get(this.createRandomComicUrl())
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
}

getLatencyRandomComic(): Promise<XkcdComic> {
  return new Promise(resolve => {setTimeout(() => resolve(this.getRandomComic()), 2000);
  });
}



private extractData(res: Response) {
  let body = res.json();
  console.log('What is in the data ', body);
  return body || { };
}

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
