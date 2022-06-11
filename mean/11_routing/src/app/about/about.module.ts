import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [AboutComponent, AboutMeComponent],
  imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {}
