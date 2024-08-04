import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  @Input() idGame: string = '';

  @Input() userName: string = '';

  public sideMenu = [
    {
      name: 'Games',
      route: '/home/games'
    },
  ]

  logout(){
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
