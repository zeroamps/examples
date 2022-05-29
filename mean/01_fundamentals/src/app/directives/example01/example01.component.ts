import { Component } from '@angular/core';

class Person {
  constructor(public firstName: string, public lastName: string, public email: string) {}
}

@Component({
  templateUrl: './example01.component.html'
})
export class Example01Component {
  persons: Person[];

  constructor() {
    this.persons = [];
    for (let index = 0; index < 5; index++)
      this.persons.push(new Person(`first ${index}`, `last ${index}`, `email ${index}`));
  }
}
