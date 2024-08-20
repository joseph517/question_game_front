import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/home.intercaces';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  gameList : Game[] = []
  
  constructor(
    private userService : UserService
  ) { }
  
  ngOnInit(): void {
    this.userService.getGameList().subscribe((res) => {
      this.gameList = res;
    });
  }
}
