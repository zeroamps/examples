import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private auth: AuthService) {}

  submit(ngForm: NgForm): void {
    if (!ngForm.valid) return ngForm.form.markAllAsTouched();
    this.auth.login(ngForm.value.username, ngForm.value.password).subscribe({
      complete: () => {
        this.auth.navigateToHome();
      },
      error: () => {
        ngForm.form.setErrors({ invalid: true });
      }
    });
  }
}
