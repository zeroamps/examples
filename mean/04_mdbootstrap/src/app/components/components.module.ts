import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbModule } from '../shared/mdb.module';
import { AccordionComponent } from './accordion/accordion.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [AccordionComponent, BadgesComponent, ButtonsComponent],
  imports: [CommonModule, MdbModule],
  exports: [AccordionComponent, BadgesComponent, ButtonsComponent]
})
export class ComponentsModule {}
