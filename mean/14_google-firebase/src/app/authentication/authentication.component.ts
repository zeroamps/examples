import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {
  private recaptchaVerifier: any;
  constructor(public auth: AngularFireAuth) {}

  loginWithEmailAndPassword() {
    this.auth
      .signInWithEmailAndPassword('test.user@gmail.com', '123456')
      .then((value) => console.log(value))
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          console.log('Wrong password.');
        } else {
          console.log(errorMessage);
        }
        console.log(error);
      });
  }

  loginWithPhoneNumber() {
    if (!this.recaptchaVerifier) {
      this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', { size: 'invisible' });
    }

    this.auth
      .signInWithPhoneNumber('+1 650-555-1234', this.recaptchaVerifier)
      .then(function (confirmationResult) {
        return confirmationResult.confirm('123456');
      })
      .then((credentials) => {
        console.log(credentials);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.auth
      .signOut()
      .then(() => console.log('Success!'))
      .catch((error) => console.log(error));
  }
}
