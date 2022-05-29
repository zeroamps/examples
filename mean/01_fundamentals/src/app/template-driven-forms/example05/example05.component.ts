import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './example05.component.html'
})
export class Example05Component {
  submit(ngForm: NgForm): void {
    ngForm.form.markAllAsTouched();
  }

  set(ngForm: NgForm): void {
    // you have to define all propertiers
    ngForm.form.setValue({ firstName: 'Bill', lastName: 'Clinton', email: 'bill.clinton@gmail.com' });
  }

  patch(ngForm: NgForm): void {
    // you don't have to define all properties
    ngForm.form.patchValue({ firstName: 'Bill', lastName: 'Clinton' });
  }
}
