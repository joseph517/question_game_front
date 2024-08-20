import { Injectable } from '@angular/core';
import { CanActivate, Route, UrlSegment, UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.checkAuthentication()) {
      // El usuario no está logueado, permite el acceso
      this.router.navigate(['/auth/login']);
      return false;
    } else {
      // El usuario está logueado, redirige a otra página (por ejemplo, el dashboard)
      return true;
    }
  }
}
