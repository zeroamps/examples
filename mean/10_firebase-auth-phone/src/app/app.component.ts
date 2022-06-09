import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RecaptchaVerifier } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private recaptchaVerifier: RecaptchaVerifier;
  @ViewChild('recaptcha') private recaptcha: ElementRef;

  constructor(private auth: Auth, private angularFireAuth: AngularFireAuth) {}

  ngAfterViewInit(): void {
    this.recaptchaVerifier = new RecaptchaVerifier(this.recaptcha.nativeElement, { size: 'invisible' }, this.auth);
  }

  signInWithPhoneNumber() {
    this.angularFireAuth
      .signInWithPhoneNumber('+1 650-555-1234', this.recaptchaVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        return confirmationResult.confirm('123456');
      })
      .then((credentials) => {
        console.log(credentials);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
