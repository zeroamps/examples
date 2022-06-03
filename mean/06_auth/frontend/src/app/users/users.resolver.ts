import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { User } from './user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {
  constructor(private usersService: UsersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.usersService.all();
  }
}
