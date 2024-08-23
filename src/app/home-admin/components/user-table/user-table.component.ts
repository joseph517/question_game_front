import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../../interface/home-admin.interface';

@Component({
  selector: 'home-admin-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent{

  @Input() userList!: User[]

}
