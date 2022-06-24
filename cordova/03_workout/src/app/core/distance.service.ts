import { DecimalPipe } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  private _distance = 0;
  private _latitude: number;
  private _longitude: number;
  private _prevLatitude: number;
  private _prevLongitude: number;
  private _prevMeasured: moment.Moment;
  private _watch: number;

  onChange = new EventEmitter<string>();
  onLogger = new EventEmitter<string>();

  constructor(private decimalPipe: DecimalPipe) {
    navigator.geolocation.getCurrentPosition(() => {});
  }

  get distance(): string {
    return `${this.decimalPipe.transform(this._distance / 1000, '2.3')}`;
  }

  start() {
    this._distance = 0;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this._latitude = position.coords.latitude;
        this._longitude = position.coords.longitude;
        this._prevLatitude = this._latitude;
        this._prevLongitude - this._longitude;
        this._prevMeasured = moment();

        this._watch = navigator.geolocation.watchPosition(
          (position) => {
            const updatedLatitude = position.coords.latitude;
            const updatedLongitude = position.coords.longitude;
            const distance = this.calculateDistance(this._latitude, this._longitude, updatedLatitude, updatedLongitude);
            const prevDistance = this.calculateDistance(
              this._prevLatitude,
              this._prevLongitude,
              updatedLatitude,
              updatedLongitude
            );

            const duration = moment.duration(moment().diff(this._prevMeasured));
            const speed = prevDistance / duration.asSeconds();
            this._prevLatitude = updatedLatitude;
            this._prevLongitude = updatedLongitude;
            this._prevMeasured = moment();
            this.onLogger.emit(`${distance}, ${duration.asSeconds()}, ${speed}`);

            if (distance > 1.5 && speed < 5) {
              this._distance += distance;
              this._latitude = updatedLatitude;
              this._longitude = updatedLongitude;
              this.onChange.emit(this.distance);
            }
          },
          this.error,
          { enableHighAccuracy: true }
        );
      },
      this.error,
      { enableHighAccuracy: true }
    );
  }

  stop() {
    navigator.geolocation.clearWatch(this._watch);
  }

  private error(error: any) {
    this.onLogger.emit(`code: ${error.code}, message: ${error.message}`);
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371e3; // metres
    const phee1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const phee2 = (lat2 * Math.PI) / 180;
    const delta_phee = ((lat2 - lat1) * Math.PI) / 180;
    const delta_lambda = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(delta_phee / 2) * Math.sin(delta_phee / 2) +
      Math.cos(phee1) * Math.cos(phee2) * Math.sin(delta_lambda / 2) * Math.sin(delta_lambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // in metres
    return d;
  }
}
