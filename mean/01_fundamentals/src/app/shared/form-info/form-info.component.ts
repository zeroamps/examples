import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html'
})
export class FormInfoComponent {
  @Input() ngForm: NgForm;

  render(): string[] {
    const output: string[] = [];

    this.renderControl('form', this.ngForm.form, output);
    output.push(`form.submitted: ${this.ngForm.submitted}`);
    this.renderControls(this.ngForm.controls, output);

    return output;
  }

  private renderControls(controls: { [key: string]: AbstractControl }, output: string[]): void {
    for (const name of Object.keys(controls)) {
      this.renderControl(name, controls[name], output);
      if (controls[name] instanceof FormGroup) {
        const formGroup = controls[name] as FormGroup;
        this.renderControls(formGroup.controls, output);
      }
    }
  }

  private renderControl(name: string, control: AbstractControl, output: string[]): void {
    output.push(`${name}.valid: ${control.valid}`);
    output.push(`${name}.invalid: ${control.invalid}`);
    output.push(`${name}.touched: ${control.touched}`);
    output.push(`${name}.untouched: ${control.untouched}`);
    output.push(`${name}.dirty: ${control.dirty}`);
    output.push(`${name}.pristine: ${control.pristine}`);
  }
}
