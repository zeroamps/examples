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
export class Interceptor2 implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const name = 'Interceptor 2';

    const newBody = { ...request.body, name: 'TEST' };
    const cloned = request.clone({ body: newBody });
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
