import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, Ranking } from '../../interface/home-admin.interface';
import { GameServiceAdmin } from '../../services/game.serviceAdmin';

@Component({
  selector: 'app-raking',
  templateUrl: './raking.component.html',
  styleUrls: ['./raking.component.css']
})
export class RakingComponent implements OnInit {

  rankingList:Ranking[] = []

  constructor(
    private _route: ActivatedRoute,
    private gameServiceAdmin: GameServiceAdmin,
  ) {}

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.goToRanking( Number(id) )
  }

  goToRanking(game_id: number): void {
    this.gameServiceAdmin.getRankingGame(game_id!)
      .subscribe((res)=>{
        this.rankingList = res
        console.log('ranking',this.rankingList)
      })
  }
}
