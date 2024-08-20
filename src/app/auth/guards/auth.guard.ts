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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.checkAuthentication()) {
      // El usuario no está logueado, permite el acceso
      return true;
    } else {
      // El usuario está logueado, redirige a otra página (por ejemplo, el dashboard)
      this.router.navigate(['/home']);
      return false;
    }
  }
}
