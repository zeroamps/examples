/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-example-03-child',
  templateUrl: './example03-child.component.html'
})
export class Example03ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string;
  @ViewChild('input') private input: ElementRef;

  constructor() {
    this.name = 'Child: Lorem ipsum';
    console.log(`Child: constructor, name: ${this.name}, input: ${this.input}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child: ngOnChanges: ${JSON.stringify(changes)}`);
  }

  ngOnInit(): void {
    console.log(`Child: ngOnInit, name: ${this.name}, input: ${this.input}`);
  }

  ngDoCheck(): void {
    console.log(`Child: ngDoCheck, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterContentInit(): void {
    console.log(`Child: ngAfterContentInit, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterContentChecked(): void {
    console.log(`Child: ngAfterContentChecked, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterViewInit(): void {
    console.log(`Child: ngAfterViewInit, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterViewChecked(): void {
    console.log(`Child: ngAfterViewChecked, name: ${this.name}, input: ${this.input}`);
  }

  ngOnDestroy(): void {
    console.log(`Child: ngOnDestroy, name: ${this.name}, input: ${this.input}`);
  }
}

@Component({
  templateUrl: './example03.component.html'
})
export class Example03Component
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name: string;
  @ViewChild('input') private input: ElementRef;

  constructor() {
    this.name = 'Parent: Lorem ipsum';
    console.log(`Parent: constructor, name: ${this.name}, input: ${this.input}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Parent: ngOnChanges: ${JSON.stringify(changes)}`);
  }

  ngOnInit(): void {
    console.log(`Parent: ngOnInit, name: ${this.name}, input: ${this.input}`);
  }

  ngDoCheck(): void {
    console.log(`Parent: ngDoCheck, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterContentInit(): void {
    console.log(`Parent: ngAfterContentInit, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterContentChecked(): void {
    console.log(`Parent: ngAfterContentChecked, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterViewInit(): void {
    console.log(`Parent: ngAfterViewInit, name: ${this.name}, input: ${this.input}`);
  }

  ngAfterViewChecked(): void {
    console.log(`Parent: ngAfterViewChecked, name: ${this.name}, input: ${this.input}`);
  }

  ngOnDestroy(): void {
    console.log(`Parent: ngOnDestroy, name: ${this.name}, input: ${this.input}`);
  }
}
