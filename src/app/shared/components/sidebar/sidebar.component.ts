import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SharedService } from '../../services/shared.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private sharedService: SharedService
  ) { }

  @Input() idGame: string = '';

  @Input() userName: string = '';

  public sideMenu = [
    {
      name: 'Cuestionarios',
      route: '/home/games'
    },
  ]

  logout(){
    this.sharedService.logout();
  }

}
