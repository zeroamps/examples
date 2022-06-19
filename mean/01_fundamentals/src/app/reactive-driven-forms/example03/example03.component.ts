import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.component.html'
})
export class Example03Component {
  form: FormGroup;

  constructor(private builder: FormBuilder) {
    this.form = this.builder.group({
      firstName: this.builder.control('', Validators.required),
      lastName: this.builder.control('', Validators.required),
      email: this.builder.control('', Validators.required)
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
  }
}
