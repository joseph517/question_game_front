import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, UrlSegment, UrlTree, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus():Observable<boolean>{
    return this.authService.checkAuthentication()
    .pipe(
      tap(
         isAuthenticated => {
          console.log(isAuthenticated)
          if(!isAuthenticated) {
            this.router.navigate(['/auth/login'])
          }
         }
      )
    )
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthStatus();
  }
}
