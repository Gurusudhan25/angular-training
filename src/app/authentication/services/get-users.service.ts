import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetUsersService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<any> {
    return this._http.get(
      "https://63f5e89a59c944921f68f82e.mockapi.io/userdata/users"
    );
  }
}
