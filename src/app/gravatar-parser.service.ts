import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class GravatarParserService {

  public uri: string;
  public email: string;
  public image: string;

  constructor() {
    this.uri = 'https://www.gravatar.com/avatar/';
    this.email = 'example@example.com';
    this.image = this.uri + Md5.hashStr(this.email);
  }
  
  public buildImage(email: string){
    this.email = email;
    this.image = this.uri + Md5.hashStr(this.email);
  }
}
