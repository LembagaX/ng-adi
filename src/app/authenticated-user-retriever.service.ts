import { Injectable } from '@angular/core';
import { JwtToken } from './jwt-token';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticatedUserRetrieverService {
  constructor(private _cookie: CookieService) { }

  public writeUser(jwt: JwtToken) {
    this._cookie.set('user.name', jwt.user.name);
    this._cookie.set('user.email', jwt.user.email);
    this._cookie.set('user.token', jwt.token)
  }

  public isAuthenticated(){
    if (this._cookie.get('user.token').length != 0){
      return true;
    }
    return false;
  }

  public getCookie(key){
    return this._cookie.get(key);
  }
}
