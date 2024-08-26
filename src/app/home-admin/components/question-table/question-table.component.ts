import { Component, Inject, Input, OnInit } from '@angular/core';
import { Question, Option } from '../../interface/home-admin.interface';
import { QuestionServiceAdmin } from '../../services/question.serviceAdmin';
import { SharedService } from 'src/app/shared/services/shared.services';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, JsonPipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


 

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
      width: '600px',
      data: question
    });
  }
}
@Component({
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./question-table.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JsonPipe
  ]
})

export class OptionsDialogComponent implements OnInit {

  showForm = false;

  registerOptionForm = this.formBuilder.group({
    option: ['', [Validators.required, Validators.minLength(3)]],
    is_correct: [false]
  })

  constructor(
    public dialogRef: MatDialogRef<OptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private questionServiceAdmin: QuestionServiceAdmin,
    private sharedService: SharedService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() { }

  deleteOption(option_id: number) {

    this.questionServiceAdmin.deleteOption(option_id)
      .subscribe(() => {
        this.sharedService.openSnackBar('Opción eliminada', 'Ok');
        this.dialogRef.close();

        this.data.options = this.data.options?.filter(option => option.id !== option_id);
      }
    )
  }

  showFormOption() {
    this.showForm = !this.showForm;
  }

  saveOption() {
    this.registerOptionForm.markAllAsTouched();

    if (!this.registerOptionForm.valid) {
      this.sharedService.openSnackBar('Formulario no válido', 'error');
      return;
    }

    const option: Option = {
      option: this.registerOptionForm.get('option')?.value!,
      is_correct: this.registerOptionForm.get('is_correct')?.value!,
      question: this.data.id
    }


    this.questionServiceAdmin.createOption(option)
      .subscribe(() => {
        this.sharedService.openSnackBar('Opción guardada', 'Ok');

        this.data.options?.push(option);
        
        this.dialogRef.close();
      }
    )
  }
}