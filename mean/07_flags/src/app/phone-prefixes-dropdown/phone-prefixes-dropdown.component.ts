import { Component, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Country {
  name: string;
  code: string;
  prefix: string;
}

@Component({
  selector: 'app-phone-prefixes-dropdown',
  templateUrl: './phone-prefixes-dropdown.component.html',
  styleUrls: ['./phone-prefixes-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PhonePrefixesDropdownComponent
    }
  ]
})
export class PhonePrefixesDropdownComponent implements ControlValueAccessor {
  @ViewChild('dropdown')
  private dropdown: ElementRef<Element>;
  selected: Country;

  readonly countries: Country[] = [
    { name: 'Israel', code: 'il', prefix: '972' },
    { name: 'United Kingdom', code: 'gb', prefix: '44' },
    { name: 'United States', code: 'us', prefix: '1' },
    { name: 'Germany', code: 'de', prefix: '49' },
    { name: 'South Africa', code: 'za', prefix: '27' },
    { name: 'Macedonia', code: 'mk', prefix: '389' },
    { name: 'Poland', code: 'pl', prefix: '48' },
    { name: 'France', code: 'fr', prefix: '33' }
  ];

  prefix: string;
  touched = false;
  disabled = false;

  onChange = (prefix: string) => {};
  onTouched = () => {};

  writeValue(prefix: string) {
    this.selected = this.countries.find((c) => c.prefix === prefix) || this.countries[0];
    this.prefix = prefix;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  select(event: Event, prefix: string) {
    this.markAsTouched();
    if (!this.disabled) {
      this.dropdown.nativeElement.innerHTML = (event.target as Element).innerHTML;
      this.prefix = prefix;
      this.onChange(this.prefix);
    }
  }
}
