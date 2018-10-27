import { Component, OnInit } from '@angular/core';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { GravatarParserService } from 'src/app/gravatar-parser.service';
import { AdiServiceConnectorService } from 'src/app/adi-service-connector.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { JwtToken } from 'src/app/jwt-token';
import { Router } from '@angular/router';
import { AuthenticatedUserRetrieverService } from 'src/app/authenticated-user-retriever.service';
import { NotifierService } from 'angular-notifier';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public faUser = faUser;
  public faKey = faKey;
  public gravatar;
  public buttonMessage = 'Sign in';
  public buttonDisabled = false;
  public emailPlaceholder = 'Yourmail@domain.com'
  public email = new FormControl('', [
    Validators.required
  ]);
  public password = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private _gravatar: GravatarParserService,
    private _server: AdiServiceConnectorService,
    private _spinner: Ng4LoadingSpinnerService,
    private _router: Router,
    private _authenticate_user: AuthenticatedUserRetrieverService,
    private _notifier: NotifierService
    ) {
      if (this._authenticate_user.isAuthenticated()){
        this._router.navigate(['/dashboard']);
        this._notifier.notify('default', 'Already signed in.');
      }
    }

  ngOnInit() {
    this.gravatar = this._gravatar.image;
  }

  postLogin(){
    if (this.valid()) {
      this.rebuildGravatar();
      this.disableLoginButton();
      this.sendLogin();
    } else {
      this.buttonMessage = 'Sign in';
    }
  }

  private valid(){
    if (!this.email.valid || !this.password.valid) {
      this._notifier.notify('error', 'Both credentials are required');
      return false;
    }
    return true;
  }

  private rebuildGravatar(){
    this._gravatar.buildImage(this.email.value);
    this.gravatar = this._gravatar.image;
  }
  
  private disableLoginButton(){
    this.buttonMessage = "Sign You in...";
    this.buttonDisabled = true;
    this._spinner.show();
  }
  
  private sendLogin(){
    this._server.generateJwtToken(this.email.value, this.password.value)
    .subscribe((response: JwtToken) => {
      console.log(response.code);
      switch (response.code) {
        case 200:
          this._authenticate_user.writeUser(response);
          this._spinner.hide;
          this._notifier.notify('default', 'Yay, we found you !');
          this._router.navigate(['/dashboard']);
          this._notifier.notify('default', 'Successfuly signed in !');
          break;
        default:
          this._spinner.hide();
          this._notifier.notify('error', 'Not valid credentials');
          this.buttonMessage = "Sign in"
          this.buttonDisabled = false;
          this.password.setValue('');
          break;
      }
    });
  }
}
