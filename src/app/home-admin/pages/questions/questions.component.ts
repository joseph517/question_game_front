import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../../services/question.serviceAdmin';
import { Question } from '../../interface/home-admin.interface';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questionList: Question[] = [];

  constructor(
    private questionServiceAdmin: ServiceNameService
  ) { }

  ngOnInit(): void {
    this.getQuestionList()
  }

  getQuestionList(): void {
    this.questionServiceAdmin.getQuestionList()
      .subscribe((res) => {
        this.questionList = res
      })
  }
}
