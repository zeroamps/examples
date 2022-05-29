import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Person {
  constructor(public firstName: string, public lastName: string, public email: string) {}
}

@Component({
  templateUrl: './example06.component.html'
})
export class Example06Component {
  person: Person;

  constructor() {
    this.person = new Person('Bill', 'Clinton', 'bill.clinton@gmail.com');
  }

  submit(ngForm: NgForm): void {
    ngForm.form.markAllAsTouched();
  }
}
