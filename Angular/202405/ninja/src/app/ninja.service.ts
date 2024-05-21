import { Injectable } from '@angular/core';
import { Ninja } from './models/ninja';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const NINJA_API = 'http://localhost:3000/ninjas';

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  constructor(private http: HttpClient) {}

  // hardcoded data ...
  getOtherNinjas(): Ninja[] {
    return [
      {
        id: 1,
        name: 'Ryu',
        belt: 'black'
      },
      {
        id: 2,
        name: 'Jackie',
        belt: 'Yellow'
      },
      {
        id: 3,
        name: 'Ken',
        belt: 'Brown'
      }
    ]
  }

  //.. or better: using observables (async call) to get data from API endpoint
  getNinjas(): Observable<Ninja[]> {
    return this.http.get<Ninja[]>(NINJA_API);
  }
}
