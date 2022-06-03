import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  authorized: boolean;

  constructor(private auth: AuthService) {
    this.authorized = this.auth.authorized;
    this.auth.authorizedSubject.subscribe((authorized) => {
      this.authorized = authorized;
    });
  }

  logout(): void {
    this.auth.logout();
  }
}
