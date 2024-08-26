import { Component, Inject, Input, OnInit } from '@angular/core';
import { Question } from '../../interface/home-admin.interface';
import { QuestionServiceAdmin } from '../../services/question.serviceAdmin';
import { SharedService } from 'src/app/shared/services/shared.services';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

@Component({
  selector: 'home-admin-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.css']
})
export class QuestionTableComponent implements OnInit {

  @Input() questionList: Question[] = [];

  constructor(
    private questionServiceAdmin: QuestionServiceAdmin,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  deleteQuestion(question_id: number): void {
    console.log(question_id);

    this.questionServiceAdmin.deleteQuestion(question_id)
      .subscribe(() => {
        this.questionList = this.questionList.filter(questionArr => questionArr.id !== question_id);
        this.sharedService.openSnackBar('Pregunta eliminada', 'Ok');
      }
    )
  }

  openDialog(question: Question): void {

    const dialogRef = this.dialog.open(OptionsDialogComponent, {
      width: '500px',
      data: question
    });
  }
}
@Component({
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./question-table.component.css'],
  standalone: true,
  imports: [
    NgFor
  ]
  
})

export class OptionsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private questionServiceAdmin: QuestionServiceAdmin,
    private sharedService: SharedService

  ) { }

  ngOnInit() { }


  deleteOption(option_id: number) {

    this.questionServiceAdmin.deleteOption(option_id)
      .subscribe(() => {
        this.sharedService.openSnackBar('Opción eliminada', 'Ok');
        this.dialogRef.close();
      }
    )

  }

}