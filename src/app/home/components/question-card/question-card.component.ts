import { Component, Input, OnInit } from '@angular/core';
import { QuestionList } from '../../interfaces/home.intercaces';

@Component({
  selector: 'home-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  
  @Input() questionList: QuestionList[] = [];

  ngOnInit(): void {
    
  }


}
