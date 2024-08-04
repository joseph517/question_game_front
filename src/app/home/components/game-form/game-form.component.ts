import { Component, Input, OnInit } from '@angular/core';
import { dataToRanking } from '../game-card/game-card.component';

@Component({
  selector: 'home-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  ngOnInit(): void {
  }
  
  @Input() dataFomGame: dataToRanking = { id: 0, name: '' };

}
