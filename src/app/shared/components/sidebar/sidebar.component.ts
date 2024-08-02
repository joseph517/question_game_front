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

  @Input() idRanking: string = '';

  @Input() userName: string = '';

  

  public sideMenu = [
    {
      name: 'Games',
      route: '/home/games'
    },
    // {
    //   name: 'Ranking',
    //   route: '/home/ranking'
    // }
  ]

  logout(){
    this.authService.logout();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
