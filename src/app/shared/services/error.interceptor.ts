import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // confirm('Sesión expirada, por favor inicia sesión de nuevo');
          console.log('Sesión expirada, por favor inicia sesión de nuevo');
          localStorage.clear();
          this.router.navigate(['/auth/login']);
        }
        // Handle the error here
        console.error('error occurred:', error);
        
        //throw error as per requirement
        return throwError(error);
      })
    );
  }
}