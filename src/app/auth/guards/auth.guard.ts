import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, UrlSegment, UrlTree, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, of, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus():Observable<boolean>{
    if (!this.authService.checkAuthentication()) {
      this.router.navigate(['/auth/login']);
      return of(false);
    }
    return of(true);
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkAuthStatus();
  }
}
