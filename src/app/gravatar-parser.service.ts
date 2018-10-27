import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class GravatarParserService {

  uri = "https://www.gravatar.com/avatar/";
  email = "example@example.com";
  image;

  constructor() {
    this.image = this.uri + Md5.hashStr(this.email);
  }
  
  buildImage(email: string){
    this.email = email;
    this.image = this.uri + Md5.hashStr(this.email);
  }
}
