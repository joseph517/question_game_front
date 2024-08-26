import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { QuestionServiceAdmin } from '../../services/question.serviceAdmin';
import { Game, Question, QuestionCreate } from '../../interface/home-admin.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared/services/shared.services';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameServiceAdmin } from '../../services/game.serviceAdmin';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questionList: Question[] = [];
  
  constructor(
    private questionServiceAdmin: QuestionServiceAdmin,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getQuestionList();
  }

  getQuestionList(): void {
    this.questionServiceAdmin.getQuestionList()
      .subscribe((res) => {
        this.questionList = res
      }
    )
  }

  loadQuestionList(): void {
    this.questionServiceAdmin.getQuestionList()
      .subscribe((res) => {
        this.questionList = res
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(QuestionDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'created') {
        console.log('Creado');
        this.loadQuestionList();
      }
    });
  }
}

@Component({
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./questions.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgFor
  ]
})

export class QuestionDialogComponent implements OnInit {

  gameList: Game[] = [];

  constructor(
    public dialogRef: MatDialogRef<QuestionDialogComponent>,
    private questionServiceAdmin: QuestionServiceAdmin,
    private sharedService: SharedService,
    private gameServiceAdmin: GameServiceAdmin
  ) { }

  ngOnInit() {
    this.gameServiceAdmin.getGameList()
      .subscribe((res) => {
        this.gameList = res
      }
    )
   }

  questionsRegisterForm = new FormGroup({
    question: new FormControl('', [Validators.required,  Validators.minLength(3)]),
    score: new FormControl('', Validators.required),
    game: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    this.questionsRegisterForm.markAllAsTouched();
    if (!this.questionsRegisterForm.valid) {
      this.sharedService.openSnackBar('Formulario no válido', 'error');
      return;
    }

    const question: QuestionCreate = {
      question: this.questionsRegisterForm.get('question')?.value!,
      score: Number(this.questionsRegisterForm.get('score')?.value!),
      game: Number(this.questionsRegisterForm.get('game')?.value!),
    }

    this.questionServiceAdmin.createQuestion(question)
      .subscribe((res) => {
        this.sharedService.openSnackBar('Pregunta creada', 'success');
        this.dialogRef.close('created');
      }, 
      (err) => {
        console.log(err);
        this.sharedService.openSnackBar(err.error, 'error');
      }
    )
  }
}