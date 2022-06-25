import { DecimalPipe } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';

import { BackgroundGeolocationPlugin } from '@mauron85/cordova-plugin-background-geolocation';
declare const BackgroundGeolocation: BackgroundGeolocationPlugin;

@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  private _distance = 0;
  private _latitude?: number;
  private _longitude?: number;

  onChange = new EventEmitter<string>();
  onLogger = new EventEmitter<string>();

  constructor(private decimalPipe: DecimalPipe) {
    if (!this.ready()) return;

    BackgroundGeolocation.configure({
      locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER,
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 25,
      distanceFilter: 10,
      debug: true,
      interval: 10000,
      fastestInterval: 5000
    });

    BackgroundGeolocation.on('start', () => {
      this.onLogger.emit('started');
    });

    BackgroundGeolocation.on('stop', () => {
      this.onLogger.emit('stopped');
    });

    BackgroundGeolocation.on('background', () => {
      this.onLogger.emit('background');
    });

    BackgroundGeolocation.on('foreground', () => {
      this.onLogger.emit('foreground');
    });

    BackgroundGeolocation.on('error', (error) => {
      this.onLogger.emit(`error: ${error.code}, ${error.message}`);
    });

    BackgroundGeolocation.on('stationary', (location) => {
      this.onLogger.emit('stationary');
      this.onLogger.emit(JSON.stringify(location));
    });

    BackgroundGeolocation.on('location', (location) => {
      this.onLogger.emit('location');
      if (this._latitude && this._longitude) {
        this._distance += this.calculateDistance(
          this._latitude,
          this._longitude,
          location.latitude,
          location.longitude
        );
        this.onChange.emit(this.distance());
      }
      this._latitude = location.latitude;
      this._longitude = location.longitude;
    });
  }

  start() {
    if (!this.ready()) return;
    this._latitude = undefined;
    this._longitude = undefined;
    BackgroundGeolocation.start();
  }

  stop() {
    if (!this.ready()) return;
    BackgroundGeolocation.stop();
  }

  distance() {
    return `${this.decimalPipe.transform(this._distance / 1000, '2.2')}`;
  }

  private ready() {
    if (typeof BackgroundGeolocation === 'undefined') return false;
    return true;
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
