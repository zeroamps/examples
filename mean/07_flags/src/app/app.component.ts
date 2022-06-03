import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = this.fb.group({
    prefix: ['44', [Validators.required]]
  });

  prefixControl = new FormControl('1');

  prefix: string = '49';

  constructor(private fb: FormBuilder) {}
}
