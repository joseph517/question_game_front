import { Component,  Input, OnInit} from '@angular/core';
import { Game } from '../../interfaces/home.intercaces';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

export interface dataToRanking {
  id: number;
  name: string;
}

@Component({
  selector: 'home-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  
  data:dataToRanking = { id: 0, name: '' };


  @Input() game: Game = { id: 0, name_game: '', description: '', users: [] };
  isEmptyQuestionList: boolean = false  
  loading: boolean = false

  
  
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.getQuestionList().then((res) => {
      this.loading = false
      this.isEmptyQuestionList = !res
    })
    
   }
   
   getQuestionList(){
    return new Promise((resolve, reject) => {
      this.userService.getQuestionList(`${this.game.id}`).subscribe((res) => {
        resolve(res && res.length > 0)
      })
      
    })
  }


  goToGame(id: number, name: string) {
    this.data = { id: id, name: name };
    this.router.navigate(['home/games/questions-list', this.data.id]);
  }
}
