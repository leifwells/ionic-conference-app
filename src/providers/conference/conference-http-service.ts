import { Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConferenceHttpService {

  constructor(public http: Http) { }

  load(): any {
    return this.http.get('assets/data/data.json')
                .map((data) => {
                  return JSON.parse(data.json());
                });
  }
}
