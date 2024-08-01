import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(
    private userService: UserService
  ) { }

  userName!: string

  ngOnInit(): void {
    this.userName = this.userService.getUsersData()
    }
  }

