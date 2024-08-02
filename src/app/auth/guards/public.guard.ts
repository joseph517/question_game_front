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

  checkStatus():Observable<boolean>{
    return this.authService.checkAuthentication()
      .pipe(
        tap(
          isAuthenticated => {
            if( isAuthenticated){
              console.log(isAuthenticated)
              this.router.navigate(['/dashboard'])
            }
          }
        ),
        map( isAuthenticated => !isAuthenticated)
      )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{
    console.log(this.checkStatus());
    
      return this.checkStatus()
  }

}
