import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtToken } from './jwt-token';

@Injectable({
  providedIn: 'root'
})
export class AdiServiceConnectorService {

  private base = "http://adi-server.herokuapp.com/";

  constructor(private _http: HttpClient) { }

  generateJwtToken(email: string, password: string){

    const head = new HttpHeaders({
      "Content-type" : 'application/json'
    })

    return this._http.post<JwtToken>(
      this.base + "users/generate.json",
      {
        "user" : {
          "email" : email,
          "password" : password
        }
      },
      {
        headers: head
      }
    );
  }
}
