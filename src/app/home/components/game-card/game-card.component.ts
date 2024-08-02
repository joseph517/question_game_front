import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() dataToRanking = new EventEmitter<dataToRanking>(); 

  
  constructor(private router: Router) { }

  goToGameForm(id: number, name: string) {
    this.data = { id: id, name: name };

    this.dataToRanking.emit(this.data);
    this.router.navigate(['home/games/form']);
  }
  
  
}
