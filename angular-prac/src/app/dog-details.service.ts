import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDog } from './view';
@Injectable({
  providedIn: 'root',
})
export class DogDetailsService {
  public url: string = '../assets/dogs.json';
  constructor(private _http: HttpClient) {}

  getDogs(): Observable<IDog> {
    return this._http.get<IDog>(this.url);
  }
}
