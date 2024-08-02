import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { dataToRanking } from '../../components/game-card/game-card.component';

@Component({
  selector: 'home-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  id: number = 0;
  name: string = '';
  
  ngOnInit(): void {
    
  }

  onDataToRanking(data: dataToRanking) {
    console.log(data);
  }
  




}
