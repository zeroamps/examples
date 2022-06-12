import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesComponent } from './directives/directives.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';

const routes: Routes = [
  { path: 'directives', redirectTo: 'directives/01', pathMatch: 'full' },
  {
    path: 'directives',
    component: DirectivesComponent,
    children: [
      { path: '01', component: Example01Component },
      { path: '02', component: Example02Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule {}
