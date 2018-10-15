import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable, interval, pipe } from 'rxjs';


@Injectable()
export class TableService {
  constructor(private http: HttpClient) {
  }

  getData() {
     return this.http.get('http://api.tvmaze.com/search/shows?q=girl');
       // .pipe(map(res => res.));
  }
}
