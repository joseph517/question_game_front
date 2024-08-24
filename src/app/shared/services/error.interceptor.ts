import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SharedService } from './shared.services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private sharedService: SharedService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // confirm('Sesión expirada, por favor inicia sesión de nuevo');
          this.sharedService.openSnackBar('Sesión expirada, por favor inicia sesión de nuevo', 'OK', 2000);
          this.sharedService.logout();
        }
        // Handle the error here
        console.error('error occurred:', error);
        //throw error as per requirement
        return throwError(error);
      })
    );
  }
}