import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccordionComponent } from './accordion/accordion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AccordionComponent, CarouselComponent, ModalComponent],
  imports: [CommonModule, NgbModule],
  exports: [AccordionComponent, CarouselComponent, ModalComponent]
})
export class ComponentsModule {}
