import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { FormInfoComponent } from './form-info/form-info.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example03ChildComponent, Example03Component } from './example03/example03.component';
import { Example04Component } from './example04/example04.component';
import { Example05Component } from './example05/example05.component';
import { Example06Component } from './example06/example06.component';
import { CustomValidatorDirective, Example07Component } from './example07/example07.component';

@NgModule({
  declarations: [
    FormInfoComponent,
    TemplateDrivenFormsComponent,
    Example01Component,
    Example02Component,
    Example03Component,
    Example03ChildComponent,
    Example04Component,
    Example05Component,
    Example06Component,
    Example07Component,
    CustomValidatorDirective
  ],
  imports: [CommonModule, FormsModule, TemplateDrivenFormsRoutingModule]
})
export class TemplateDrivenFormsModule {}
