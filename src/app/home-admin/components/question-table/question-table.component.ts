import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../interface/home-admin.interface';
import { ServiceNameService } from '../../services/question.serviceAdmin';
import { SharedService } from 'src/app/shared/services/shared.services';

@Component({
  selector: 'home-admin-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.css']
})
export class QuestionTableComponent implements OnInit {

  @Input() questionList: Question[] = [];

  constructor(
    private questionServiceAdmin: ServiceNameService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {

  }

  deleteQuestion(question_id: number): void {
    console.log(question_id);

    this.questionServiceAdmin.deleteQuestion(question_id)
      .subscribe(() => {
        this.questionList = this.questionList.filter(questionArr => questionArr.id !== question_id);
        this.sharedService.openSnackBar('Pregunta eliminada', 'Ok');
      })
    
  }

}
