import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-info',
  templateUrl: './form-info.component.html'
})
export class FormInfoComponent {
  @Input() control: AbstractControl;

  render(): any {
    const output: any = {};
    return this.renderControls(this.control, output);
  }

  private renderControls(parent: AbstractControl, output: any): void {
    output = this.renderControl(parent, output);
    if (parent instanceof FormGroup) {
      output.controls = [];
      for (const name of Object.keys(parent.controls)) {
        output.controls.push(this.renderControl(parent.controls[name], {}));
        if (parent.controls[name] instanceof FormGroup) {
          // output = this.renderControls(parent.controls[name], output);
        }
      }
    }

    return output;
  }

  private renderControl(control: AbstractControl, output: any): void {
    output = {
      value: control.value,
      valid: control.valid,
      invalid: control.invalid,
      touched: control.touched,
      untouched: control.untouched,
      dirty: control.dirty,
      pristine: control.pristine
    };

    return output;
  }
}
