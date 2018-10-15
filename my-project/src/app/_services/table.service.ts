import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TableService {
  // private _url: string = "http://api.tvmaze.com/search/shows?q=girl";
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://api.tvmaze.com/search/shows?q=girl');
  }
}
