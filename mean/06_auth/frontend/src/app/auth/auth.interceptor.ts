import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.token) {
      return next
        .handle(
          request.clone({
            headers: request.headers.set('Authorization', `Bearer ${this.authService.token}`)
          })
        )
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) this.authService.logout();
            return throwError(() => error);
          })
        );
    }

    return next.handle(request);
  }
}
