import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesModule } from './directives/directives-forms.module';
import { TemplateDrivenFormsModule } from './template-driven-forms/template-driven-forms.module';

const routes: Routes = [
  { path: '', redirectTo: 'template-driven-forms', pathMatch: 'full' },
  { path: 'template-driven-forms', loadChildren: () => TemplateDrivenFormsModule },
  { path: 'directives', loadChildren: () => DirectivesModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
