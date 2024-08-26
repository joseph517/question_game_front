import { Component, Input, OnInit } from '@angular/core';
import { Ranking } from '../../interface/home-admin.interface';

@Component({
  selector: 'home-admin-rankin-table',
  templateUrl: './ranking-table.component.html',
  styleUrls: ['./ranking-table.component.css']
})
export class RankingTableComponent implements OnInit {

  @Input() rankingList: Ranking[] = []

  ngOnInit(): void {
    console.log(this.rankingList)
  }



  
}
