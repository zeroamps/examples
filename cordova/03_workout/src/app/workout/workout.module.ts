import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { WorkoutComponent } from './workout.component';
import { WorkoutRoutingModule } from './workout-routing.module';

@NgModule({
  declarations: [WorkoutComponent],
  providers: [DecimalPipe],
  imports: [CommonModule, WorkoutRoutingModule]
})
export class WorkoutModule {}
