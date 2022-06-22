import { Component } from '@angular/core';
import * as moment from 'moment';
import { DurationService } from './core/duration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  duration: any;
  running: boolean;

  constructor(private durationService: DurationService) {
    this.duration = this.durationService.duration;
    this.running = this.durationService.running;
    this.durationService.durationChange.subscribe((duration) => (this.duration = duration));
  }

  start() {
    this.durationService.start();
    this.running = this.durationService.running;
  }

  finish() {
    this.durationService.finish();
    this.running = this.durationService.running;
  }
}
