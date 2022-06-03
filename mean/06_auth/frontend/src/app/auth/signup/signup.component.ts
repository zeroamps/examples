import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  submit(ngForm: NgForm): void {
    ngForm.form.markAllAsTouched();
  }
}
