import { Component, OnInit } from '@angular/core';
import { UserServiceAdmin } from '../../services/user.serviceAdmin';
import { User } from '../../interface/home-admin.interface';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../../../shared/services/shared.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userList: User[] = [];
  
  constructor(
    private userServiceAdmin: UserServiceAdmin,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userServiceAdmin.getUserList()
      .subscribe((users) => {
        this.userList = users;
    }) 
  }
  loadUserList(): void {
    this.userServiceAdmin.getUserList().subscribe((users) => {
      this.userList = users;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'created') {
        console.log('Creado');
        this.loadUserList();
      }
    });
  }
}

@Component({
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private userServiceAdmin: UserServiceAdmin,
    private sharedService: SharedService,
  ) {}

  registerUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('',  [Validators.required, Validators.email], ),
    password: new FormControl('', Validators.required)
  })

  onSubmit(): void {
    this.registerUserForm.markAllAsTouched();

    if (!this.registerUserForm.valid) {
      this.sharedService.openSnackBar('Formulario no válido', 'OK', 2000);
      return;
    }

    const user: User = {
      name: this.registerUserForm.get('name')?.value!,
      email: this.registerUserForm.get('email')?.value!,
      password: this.registerUserForm.get('password')?.value!
    };

    this.userServiceAdmin.createUser(user).subscribe(
      (res) => {
        console.log(res);
        this.sharedService.openSnackBar('Usuario creado', 'OK', 2000);
        this.dialogRef.close('created');
      },
      (err) => {
        console.log('Error al crear el usuario', err);
        this.sharedService.openSnackBar('Error al crear el usuario', 'OK', 2000);
      }
    );
  }
}