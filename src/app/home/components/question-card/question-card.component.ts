import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { QuestionList } from '../../interfaces/home.intercaces';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'home-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class QuestionCardComponent implements OnChanges, OnInit {
  
  @Input() questionList: QuestionList[] = [];
  columnsToDisplay: string[] = [ 'name', 'puntos'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay];
  expandedElement: QuestionList | null | undefined;

  @Output() onAnswer = new EventEmitter();
  
  @Output() onQuestionAnswered = new EventEmitter();


  optionSelected: number = 0;


  constructor(
    private userService: UserService,
    private route: Router
  ){}

  ngOnInit(): void {
    console.log(this.questionList)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('hola', changes)
    if(changes['questionList'] && !changes['questionList'].firstChange){
      if(this.questionList.length === 0){
        this.route.navigate(['/home/games']) 
        this.onQuestionAnswered.emit()
      }
    }
  }

  onOptionSelected(optionId: number) {
    console.log('option',optionId)
    this.optionSelected = optionId
  }
  goToValidateQuestion(questionId: number){
    let optionId = this.optionSelected.toString()
    let question = questionId.toString()

    this.userService.getValidateQuestion(question, optionId).subscribe((res)=>{
      if(res.message === 'Respuesta correcta'){
        console.log(res.message)
      }else{
        console.log(res.message)}
      this.onAnswer.emit()
    },(err)=>{
      console.log(err)
    })
  } 
}