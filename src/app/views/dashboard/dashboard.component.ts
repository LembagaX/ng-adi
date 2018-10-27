import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatedUserRetrieverService } from 'src/app/authenticated-user-retriever.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authenticate_user: AuthenticatedUserRetrieverService,
    private _notifier: NotifierService
    ) {
    if (!this._authenticate_user.isAuthenticated()) {
      this._notifier.notify('error', 'You need to sign in first.');
      this._router.navigate(['/login']);
    }
  }

  ngOnInit() {
  }

}
