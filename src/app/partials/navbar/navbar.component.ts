import { Component, OnInit } from '@angular/core';
import { GravatarParserService } from '../../gravatar-parser.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public gravatar: string;
  public links: any ;
  public avatar_links: any;
  
  constructor(private _gravatar: GravatarParserService){}
  
  public ngOnInit(){
    this.gravatar = this._gravatar.image
    this.links = [
      {
        display: 'Dashboard',
        uri: 'dashboard'
      }
    ];
    this.avatar_links = [
      {
        display: 'Updates',
        class: 'text-primary'
      },
      {
        display: 'Messages',
        class: 'text-primary'
      },
      {
        display: 'Tasks',
        class: 'text-primary'
      },
      {
        display: 'Comments',
        class: 'text-primary'
      },
      {
        display: 'Profile',
        class: 'text-primary'
      },
      {
        display: 'Settings',
        class: 'text-primary'
      },
      {
        display: 'Payments',
        class: 'text-primary'
      },
      {
        display: 'Projects',
        class: 'text-primary'
      },
      {
        display: 'Lock Account',
        class: 'text-primary'
      },
      {
        display: 'Logout'
      }
    ];
  }

}
