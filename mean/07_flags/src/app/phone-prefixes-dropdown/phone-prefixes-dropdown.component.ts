import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-phone-prefixes-dropdown',
  templateUrl: './phone-prefixes-dropdown.component.html',
  styleUrls: ['./phone-prefixes-dropdown.component.scss']
})
export class PhonePrefixesDropdownComponent {
  @ViewChild('dropdown')
  private selected: ElementRef<Element>;

  readonly countries = [
    { name: 'Israel', code: 'il', prefix: 972 },
    { name: 'United Kingdom', code: 'gb', prefix: 44 },
    { name: 'United States', code: 'us', prefix: 1 },
    { name: 'Germany', code: 'de', prefix: 49 },
    { name: 'South Africa', code: 'za', prefix: 27 },
    { name: 'Macedonia', code: 'mk', prefix: 389 },
    { name: 'Poland', code: 'pl', prefix: 48 },
    { name: 'France', code: 'fr', prefix: 33 }
  ];

  prefix: number;

  constructor() {
    this.prefix = this.countries[0].prefix;
  }

  select(event: Event, prefix: number) {
    this.selected.nativeElement.innerHTML = (event.target as Element).innerHTML;
    this.prefix = prefix;
  }
}
