import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example03Component } from './example03/example03.component';
import { Example04Component } from './example04/example04.component';
import { Example05Component } from './example05/example05.component';
import { Example06Component } from './example06/example06.component';
import { Example07Component } from './example07/example07.component';

const routes: Routes = [
  { path: '', redirectTo: 'template-driven-forms/01', pathMatch: 'full' },
  { path: 'template-driven-forms', redirectTo: 'template-driven-forms/01', pathMatch: 'full' },
  {
    path: 'template-driven-forms',
    component: TemplateDrivenFormsComponent,
    children: [
      { path: '01', component: Example01Component },
      { path: '02', component: Example02Component },
      { path: '03', component: Example03Component },
      { path: '04', component: Example04Component },
      { path: '05', component: Example05Component },
      { path: '06', component: Example06Component },
      { path: '07', component: Example07Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormsRoutingModule {}
