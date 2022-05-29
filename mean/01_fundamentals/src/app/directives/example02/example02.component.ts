import { Component, Directive, OnDestroy, OnInit } from '@angular/core';

class Person {
  constructor(public id: number, public firstName: string, public lastName: string, public email: string) {}
}

@Directive({ selector: '[appMonitor]' })
export class MonitorDirective implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}

@Component({
  templateUrl: './example02.component.html'
})
export class Example02Component {
  persons: Person[];
  private id = 1;

  constructor() {
    this.persons = [];
    const count = 10;
    for (let index = 0; index < count; index++) {
      this.persons.push(new Person(this.id, `first ${this.id}`, `last ${this.id}`, `email ${this.id}`));
      this.id++;
    }
  }

  insert(): void {
    this.persons.push(new Person(this.id, `first ${this.id}`, `last ${this.id}`, `email ${this.id}`));
    this.id++;
  }

  moveUp(person: Person): void {
    const index = this.persons.findIndex((item: Person) => item.id === person.id);
    this.persons.splice(index, 1);
    this.persons.splice(index - 1, 0, person);
  }

  moveDown(person: Person): void {
    const index = this.persons.findIndex((item: Person) => item.id === person.id);
    this.persons.splice(index, 1);
    this.persons.splice(index + 1, 0, person);
  }

  delete(person: Person): void {
    const index = this.persons.findIndex((item: Person) => item.id === person.id);
    this.persons.splice(index, 1);
  }

  trackById(index: number, person: Person): number {
    console.log('trackByFn');
    return person.id;
  }
}
