import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  activeTab: string = 'users';

  constructor(private router: Router) { }


  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
