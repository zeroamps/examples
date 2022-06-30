import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterLayoutComponent } from './layouts/center-layout/center-layout.component';

@NgModule({
  declarations: [CenterLayoutComponent],
  imports: [CommonModule],
  exports: [CenterLayoutComponent]
})
export class SharedModule {}
