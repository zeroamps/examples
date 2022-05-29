import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { DirectivesComponent } from './directives/directives.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';

@NgModule({
  declarations: [DirectivesComponent, Example01Component, Example02Component],
  imports: [CommonModule, FormsModule, DirectivesRoutingModule]
})
export class DirectivesModule {}
