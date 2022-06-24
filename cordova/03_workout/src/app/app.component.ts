import { Component } from '@angular/core';
import * as moment from 'moment';
import { DistanceService } from './core/distance.service';
import { DurationService } from './core/duration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logs: string[] = [];
  duration: string;
  distance: string;
  running: boolean;

  constructor(private durationService: DurationService, private distanceService: DistanceService) {
    this.durationService.onChange.subscribe((duration) => (this.duration = duration));
    this.duration = this.durationService.duration;
    this.distanceService.onChange.subscribe((distance) => (this.distance = distance));
    this.distanceService.onLogger.subscribe((message) => this.logs.push(message));
    this.distance = this.distanceService.distance;
  }

  start() {
    this.durationService.start();
    this.distanceService.start();
    this.running = true;
  }

  finish() {
    this.durationService.stop();
    this.distanceService.stop();
    this.running = false;
  }
}
