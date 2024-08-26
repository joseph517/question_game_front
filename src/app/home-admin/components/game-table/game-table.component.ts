import { Component, Input } from '@angular/core';
import { Game, Ranking } from '../../interface/home-admin.interface';
import { GameServiceAdmin } from '../../services/game.serviceAdmin';
import { SharedService } from 'src/app/shared/services/shared.services';
import { Router } from '@angular/router';

@Component({
  selector: 'home-admin-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})
export class GameTableComponent {

  @Input() gameList!: Game[]

  constructor(
    private gameServiceAdmin: GameServiceAdmin,
    private sharedService: SharedService,
    private router: Router
  ) { }

  deleteGame(game: Game): void {
    this.gameServiceAdmin.deleteGame(game.id!)
      .subscribe(() => {
      this.gameList = this.gameList.filter(gameArr => gameArr.id !== game.id);
      this.sharedService.openSnackBar('Juego eliminado', 'Ok');
    })
  }
}