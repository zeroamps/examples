import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { Workout } from '../shared/workout.domain';
import { WorkoutModel } from '../shared/workout.model';
import { DistanceService } from './distance.service';
import { DurationService } from './duration.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private _workouts: Workout[] = [];

  constructor(private durationService: DurationService, private distanceService: DistanceService) {
    const workouts = localStorage.getItem('workouts');
    if (!workouts) return;
    this._workouts = JSON.parse(workouts);
  }

  findAll() {
    return this._workouts
      .sort((a, b) => b.started - a.started)
      .map(
        (workout) =>
          ({
            started: new Date(workout.started).toLocaleString(),
            duration: this.durationService.format(moment.duration(workout.duration, 'milliseconds')),
            distance: this.distanceService.format(workout.distance)
          } as WorkoutModel)
      );
  }

  create(started: number, duration: number, distance: number) {
    this._workouts.push({ started, duration, distance });
    localStorage.setItem('workouts', JSON.stringify(this._workouts));
  }
}
