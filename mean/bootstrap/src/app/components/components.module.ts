import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AlertsComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent
  ],
  imports: [CommonModule],
  exports: [
    AccordionComponent,
    AlertsComponent,
    BadgeComponent,
    BreadcrumbComponent,
    ButtonsComponent,
    ButtonGroupComponent,
    CardComponent,
    CarouselComponent
  ]
})
export class ComponentsModule {}
