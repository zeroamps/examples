import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class Interceptor1 implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const name = 'Interceptor 1';

    const cloned = request.clone({ headers: request.headers.set('Authorization', 'Bearer asdaqwecxkjklk...') });
    console.log(name, cloned);

    return next.handle(cloned).pipe(
      tap((event: HttpEvent<unknown>) => {
        if (!(event instanceof HttpResponse)) return;
        console.log(name, event);
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(name, error);
        return throwError(() => error);
      })
    );
  }
}
