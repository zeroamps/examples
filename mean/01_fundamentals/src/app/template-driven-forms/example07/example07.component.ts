import { Component, Directive } from '@angular/core';
import { AbstractControl, NgForm, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }]
})
export class CustomValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value?.length === 13 ? { custom: true } : null;
  }
}

@Component({
  templateUrl: './example07.component.html'
})
export class Example07Component {
  submit(ngForm: NgForm): void {
    ngForm.form.markAllAsTouched();
  }
}
