import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example02',
  templateUrl: './example02.component.html'
})
export class Example02Component {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
  }
}
