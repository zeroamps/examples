import { DecimalPipe } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DurationService {
  private _started = moment();
  private _duration: moment.Duration;
  private _interval: any;

  onChange = new EventEmitter<string>();

  constructor(private decimalPipe: DecimalPipe) {
    this._duration = moment.duration(this._started.diff(this._started));
  }

  get duration(): string {
    const hours = `${this.decimalPipe.transform(this._duration.hours(), '2.0')}`;
    const minutes = `${this.decimalPipe.transform(this._duration.minutes(), '2.0')}`;
    const seconds = `${this.decimalPipe.transform(this._duration.seconds(), '2.0')}`;
    return `${hours}:${minutes}:${seconds}`;
  }

  start() {
    this._started = moment();
    this._interval = setInterval(() => {
      this._duration = moment.duration(moment().diff(this._started));
      this.onChange.emit(this.duration);
    }, 1000);
  }

  stop() {
    clearInterval(this._interval);
  }
}
