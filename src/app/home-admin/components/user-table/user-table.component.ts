import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../interface/home-admin.interface';
import { UserServiceAdmin } from '../../services/user.serviceAdmin';

@Component({
  selector: 'home-admin-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent{

  @Input() userList!: User[]

  constructor(
    private userServiceAdmin: UserServiceAdmin
  ) { }

  deleteUser(user: User): void {
    this.userServiceAdmin.deleteUser(user.id!)
      .subscribe(() => {
        this.userList = this.userList.filter(usr => usr.id !== user.id);
    })
  }

}
