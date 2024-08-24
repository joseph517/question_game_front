import { Component, OnInit } from '@angular/core';
import { Game } from '../../interface/home-admin.interface';
import { GameServiceAdmin } from '../../services/game.serviceAdmin';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/services/shared.services';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameList: Game[] = [];

  constructor(
    private gameServiceAdmin: GameServiceAdmin,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.gameServiceAdmin.getGameList().subscribe((games) => {
      this.gameList = games;
    }) 
  }

  loadGameList(): void {
    this.gameServiceAdmin.getGameList().subscribe((games) => {
      this.gameList = games;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GamesDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'created') {
        this.loadGameList();
      }
    });
    
  }
}

@Component({
  templateUrl: './games-dialog.component.html',
  styleUrls: ['./games.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GamesDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<GamesDialogComponent>,
    private gameServiceAdmin: GameServiceAdmin,
    private sharedService: SharedService
  ) {}

  registerGameForm = new FormGroup({
    name_game: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    this.registerGameForm.markAllAsTouched();
    if (!this.registerGameForm.valid) {
      this.sharedService.openSnackBar('Formulario no válido', 'error');
      return;
    }

    const game: Game = {
      name_game: this.registerGameForm.get('name_game')?.value!,
      description: this.registerGameForm.get('description')?.value!
    }

    this.gameServiceAdmin.createGame(game)
      .subscribe((res) => {
        this.sharedService.openSnackBar('Juego creado', 'success');
        this.dialogRef.close('created');
      }, 
      (err) => {
        console.log(err);
        this.sharedService.openSnackBar(err.error, 'error');
      }
    )
  }
}