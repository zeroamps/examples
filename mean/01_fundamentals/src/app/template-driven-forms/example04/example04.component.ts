import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './example04.component.html'
})
export class Example04Component {
  submit(ngForm: NgForm): void {
    ngForm.form.markAllAsTouched();
  }
}
