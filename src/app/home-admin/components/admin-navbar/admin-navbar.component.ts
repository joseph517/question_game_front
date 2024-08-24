import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.services';


@Component({
  selector: 'home-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {

  activeTab: string = 'users';

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }


  logout(){
    this.sharedService.logout();
  }

}
