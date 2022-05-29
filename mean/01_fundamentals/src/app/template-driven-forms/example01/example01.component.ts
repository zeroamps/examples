import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './example01.component.html'
})
export class Example01Component {
  submit(ngForm: NgForm): void {
    ngForm.form.markAllAsTouched();
  }
}
