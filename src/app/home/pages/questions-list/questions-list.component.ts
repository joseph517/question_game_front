import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { QuestionList } from '../../interfaces/home.intercaces';


@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {


  questionList : QuestionList[] = []
  idGame: string = ''

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.userService.getQuestionList().subscribe((res) => {
      this.questionList = res
      this.idGame = res[0].game.toString()
    })
  }
}
