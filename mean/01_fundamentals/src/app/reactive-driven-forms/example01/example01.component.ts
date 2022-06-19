import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html'
})
export class Example01Component {
  email: FormControl;

  constructor() {
    this.email = new FormControl('', Validators.required);
  }

  submit(): void {
    this.email.markAllAsTouched();
  }
}
