import { Observable } from 'rxjs/Observable';
import { XkcdComic } from './xkcdComic';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
/*export class XKCDService {
    images = [];
    private comicUrl2 = 'http://xkcd.com/info.0.json';
    private comicUrl = 'http://crossorigin.me/http://xkcd.com/info.0.json';  // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(public http: Http) {}

getData() {
    console.log('Getting Data');
    return this.http.get(this.comicUrl)
        .map((res: Response) => res.json().headers);
  }

}
*/


export class XKCDService {
  private comicUrl = 'http://crossorigin.me/http://xkcd.com/info.0.json';  // URL to web API
  constructor (private http: Http) {}



  getComic (): Promise<XkcdComic> {
  return this.http.get(this.comicUrl)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}


private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
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
