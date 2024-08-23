import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): boolean {
    if (this.authService.checkAuthentication() && !this.authService.getUserRole()) {
      return true; // Allow access if the user is logged in and is not an admin
    } else {
      this.router.navigate(['/home-admin']); // Redirect if not authorized
      return false; // Prevent access to admin child routes
    }
  }

}