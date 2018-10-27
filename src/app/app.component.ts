import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adi-client';
  authenticated = false;

  constructor(private _router: Router){
    // TODO : authenticated set to true if user cookie was exist
  }
}
