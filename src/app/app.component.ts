import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUserRetrieverService } from './authenticated-user-retriever.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adi-client';
  authenticated = false;

  constructor(
    private _router: Router,
    private _user: AuthenticatedUserRetrieverService
    ){
    if (this._user.isAuthenticated) {
      this.authenticated = true;
    }
    this._router.navigate(['/dashboard']);
  }
}
