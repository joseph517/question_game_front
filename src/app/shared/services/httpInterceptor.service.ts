import { Injectable } from "@angular/core";
import { 
    HttpErrorResponse, 
    HttpEvent, 
    HttpHandler, 
    HttpInterceptor, 
    HttpRequest, 
    HttpResponse 
} from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                () => {}, // La solicitud fue exitosa, no hacemos nada
                (error: any) => {
                    if (error instanceof HttpErrorResponse && error.status === 404) {
                        localStorage.clear();
                        this.router.navigate(['/auth/login']);
                    }
                }
            )
        );
    }
}