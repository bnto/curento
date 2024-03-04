import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ninja } from './models/ninja';
import { Observable } from 'rxjs';

const NINJA_API = "http://localhost:3000/ninja";

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  constructor(private http: HttpClient) { }

  getNinja(id: number): Observable<Ninja> {
    return this.http.get<Ninja>(`${NINJA_API}/${id}`)
  }

  getNinjas(): Observable<Ninja[]> {
    return this.http.get<Ninja[]>(NINJA_API)
  }
}
