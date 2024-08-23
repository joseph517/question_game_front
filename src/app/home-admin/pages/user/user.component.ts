import { Component, OnInit } from '@angular/core';
import { UserServiceAdmin } from '../../services/user.service';
import { User } from '../../interface/home-admin.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userList: User[] = [];
  
  constructor(private userServiceAdmin: UserServiceAdmin) {}

  ngOnInit(): void {
    this.userServiceAdmin.getUserList().subscribe((users) => {
      this.userList = users;
      console.log(this.userList)
    })
    
  }

}
