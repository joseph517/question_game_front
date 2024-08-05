import { Component, Input } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { QuestionList } from '../../interfaces/home.intercaces';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';


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
export class QuestionCardComponent {
  
  @Input() questionList: QuestionList[] = [];
  columnsToDisplay: string[] = [ 'name', 'puntos'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay];
  expandedElement: QuestionList | null | undefined;

  optionSelected: number = 0;
  form: FormGroup = new FormGroup({});

  formControls: { [key: string]: FormControl } = {};

  constructor(
    private userService: UserService
  ){}

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
    },(err)=>{
      console.log(err)
    })
  } 
}