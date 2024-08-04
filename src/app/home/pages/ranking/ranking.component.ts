import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RankingList } from '../../interfaces/home.intercaces';

@Component({
  selector: 'home-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnChanges {

  @Input() idGameRanking: string = ''

  rankingList : RankingList[] = []
  
  constructor(
    private userService : UserService,
  ) { }

  ngOnChanges(): void {
    this.userService.getRankingGame(this.idGameRanking).subscribe((res) => {
      this.rankingList = res
    },
    (err) => {
      console.log('error',err)
    })
  }

}
