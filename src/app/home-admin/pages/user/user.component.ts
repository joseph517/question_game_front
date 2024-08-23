import { Component, OnInit } from '@angular/core';
import { UserServiceAdmin } from '../../services/user.service';
import { User } from '../../interface/home-admin.interface';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
    this.userServiceAdmin.getUserList().subscribe((users) => {
      this.userList = users;
    }) 
  }

  goToCreateUser(){
    console.log('go to create user');

    this.dialog.open(UserDialogComponent, {
      width: '250px',
    });
  }
}

@Component({
  selector: 'app-user-dialog',
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
    private fb: FormBuilder
  ) {}

  public registerUserForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit(){
    this.registerUserForm.markAllAsTouched()
    console.log('submit', this.registerUserForm.value);
    this.dialogRef.close();
  }

}
