import { Component, OnInit } from '@angular/core';
import { GameList } from '../../interfaces/home.intercaces';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameList : GameList[] = []
  
  constructor(
    private userService : UserService
  ) { }
  
  ngOnInit(): void {

    this.userService.getGameList().subscribe((res) => {
      console.log(res);
      this.gameList = res;
    });

  }

}
