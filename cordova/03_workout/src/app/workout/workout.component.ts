import { Component } from '@angular/core';
import { WorkoutService } from './workout.service';
import { DistanceService } from './distance.service';
import { DurationService } from './duration.service';

@Component({
  templateUrl: './workout.component.html'
})
export class WorkoutComponent {
  duration: string;
  distance: string;
  running: boolean;
  private started: number;

  constructor(
    private durationService: DurationService,
    private distanceService: DistanceService,
    private workoutService: WorkoutService
  ) {
    this.durationService.onChange.subscribe((duration) => (this.duration = this.durationService.format(duration)));
    this.duration = this.durationService.format(this.durationService.duration);
    this.distanceService.onChange.subscribe((distance) => (this.distance = this.distanceService.format(distance)));
    this.distance = this.distanceService.format(this.distanceService.distance);
  }

  start() {
    this.started = Date.now();
    this.durationService.start();
    this.distanceService.start();
    this.running = true;
  }

  finish() {
    this.durationService.stop();
    this.distanceService.stop();
    this.workoutService.create(
      this.started,
      this.durationService.duration.asMilliseconds(),
      this.distanceService.distance
    );
    this.running = false;
  }
}
