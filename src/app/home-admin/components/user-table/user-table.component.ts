import { Component, OnInit, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { ListGameByUser, User } from '../../interface/home-admin.interface';
import { UserServiceAdmin } from '../../services/user.serviceAdmin';
import { SharedService } from 'src/app/shared/services/shared.services';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'home-admin-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent{

  @Input() userList!: User[]

  constructor(
    private userServiceAdmin: UserServiceAdmin,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) { }

  deleteUser(user: User): void {
    this.userServiceAdmin.deleteUser(user.id!)
      .subscribe(() => {
        this.userList = this.userList.filter(usr => usr.id !== user.id);
    })
  }

  openDialog(user_id: number): void {
    const dialogRef = this.dialog.open(AssignmentGameToUserDialog, {
      width: '300px',
      data: user_id
    });
  }
}
@Component({
  selector: 'selector-name',
  templateUrl: 'assignment-game-to-user-dialog.component.html',
  styleUrls: ['./user-table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})

export class AssignmentGameToUserDialog implements OnInit {

  assignmentForm = this.formBuilder.group({
    game: ['', [Validators.required, Validators.minLength(3)]],
  })

  gameList: ListGameByUser[] = [];

  constructor(
    private userServiceAdmin: UserServiceAdmin,
    private sharedService: SharedService,
    private dialogRef: MatDialogRef<AssignmentGameToUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { 

    this.userServiceAdmin.getListGameByUserView(this.data)
      .subscribe((games: ListGameByUser[]) => {
        this.gameList = games;
      })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveAssignment() {
    this.assignmentForm.markAllAsTouched();
    if(!this.assignmentForm.valid) return this.sharedService.openSnackBar('Formulario no válido', 'error');

    const assignment = {
      user_id: this.data,
      game_id: Number(this.assignmentForm.get('game')!.value,),
      // score: 0
    }
    this.userServiceAdmin.assignGameToUser(assignment)
      .subscribe(() => {
        this.sharedService.openSnackBar('Juego agregado', 'Ok');
        this.dialogRef.close();
      }
    )
  }

}