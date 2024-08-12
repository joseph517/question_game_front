import { Component,  Input} from '@angular/core';
import { GameList } from '../../interfaces/home.intercaces';
import { Router } from '@angular/router';

export interface dataToRanking {
  id: number;
  name: string;
}

@Component({
  selector: 'home-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
  
  data:dataToRanking = { id: 0, name: '' };
  @Input() gameList: GameList[] = [];

  
  constructor(private router: Router) { }

  goToGame(id: number, name: string) {
    this.data = { id: id, name: name };
    this.router.navigate(['home/games/questions-list', this.data.id]);
  }
  
  
}
