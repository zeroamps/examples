import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, Subject, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authorized: boolean;
  authorizedSubject: Subject<boolean>;
  token: string | undefined;

  constructor(private router: Router, private http: HttpClient) {
    this.authorized = false;
    this.authorizedSubject = new Subject<boolean>();
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<string>('/api/auth/login', { username, password }).pipe(
      switchMap((token) => {
        this.token = token;
        this.authorized = true;
        this.authorizedSubject.next(this.authorized);
        return of(true);
      }),
      catchError((error) => throwError(() => false))
    );
  }

  signup(username: string, password: string): Observable<boolean> {
    return this.http.post<string>('/api/auth/signup', { username, password }).pipe(
      switchMap((token) => {
        this.token = token;
        this.authorized = true;
        this.authorizedSubject.next(this.authorized);
        return of(true);
      }),
      catchError((error) => throwError(() => false))
    );
  }

  logout(): void {
    this.token = undefined;
    this.authorized = false;
    this.authorizedSubject.next(this.authorized);
    this.navigateToHome();
  }

  navigateToLogin(): void {
    this.router.navigate(['auth', 'login']);
  }

  navigateToHome(): void {
    this.router.navigate(['']);
  }
}
