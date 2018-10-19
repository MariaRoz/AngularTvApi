import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class TableService {
  constructor(private http: HttpClient) {
  }

  getData(i) {
    return this.http.get('http://api.tvmaze.com/search/shows?q=' + i);
  }
  modalData(id) {
    return this.http.get('http://api.tvmaze.com/shows' + id);
  }
}
