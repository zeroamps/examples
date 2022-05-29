import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormInfoComponent } from './form-info/form-info.component';

@NgModule({
  declarations: [FormInfoComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormInfoComponent]
})
export class SharedModule {}
