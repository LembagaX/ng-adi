import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUserRetrieverService } from './authenticated-user-retriever.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adi-client';
  
  constructor(private _router: Router){
    this._router.navigate(['/dashboard']);
  }
}
