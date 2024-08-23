import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(): boolean {
    if (this.authService.checkAuthentication() && this.authService.getUserRole()) {
      return true; // Allow access if the user is logged in and is an admin
    } else {
      this.router.navigate(['/home']); // Redirect if not authorized
      return false; // Prevent access to admin child routes
    }
  }
}