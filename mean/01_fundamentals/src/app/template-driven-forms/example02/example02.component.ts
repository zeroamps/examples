import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './example02.component.html'
})
export class Example02Component {
  submit(ngForm: NgForm): void {
    ngForm.form.markAllAsTouched();
  }
}
