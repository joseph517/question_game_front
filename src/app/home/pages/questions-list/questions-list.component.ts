import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { QuestionList } from '../../interfaces/home.intercaces';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {


  questionList : QuestionList[] = []
  idGame: string = ''

  constructor(
    private userService : UserService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idGame = this.router.snapshot.params['id']
    this.getQuestionList()
  }

  getQuestionList(){
    this.userService.getQuestionList(this.idGame).subscribe((res) => {
      this.questionList = res
    })
  }

  onAnswer(){
    this.getQuestionList()
  }
}
