import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RankingList } from '../../interfaces/home.intercaces';

@Component({
  selector: 'home-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  @Input() idGameRanking: string = ''

  rankingList : RankingList[] = []
  
  constructor(
    private userService : UserService,
  ) { }

}
