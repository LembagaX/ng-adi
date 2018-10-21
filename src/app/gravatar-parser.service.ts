import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class GravatarParserService {

  uri = "https://www.gravatar.com/avatar/";
  email = "lembagax@gmail.com";
  image;

  constructor(private _http: HttpClient) {
    this.image = this.uri + Md5.hashStr(this.email);
  }

}
