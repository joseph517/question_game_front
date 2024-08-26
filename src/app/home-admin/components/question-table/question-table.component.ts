import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../interface/home-admin.interface';

@Component({
  selector: 'home-admin-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.css']
})
export class QuestionTableComponent implements OnInit {

  @Input() questionList: Question[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
