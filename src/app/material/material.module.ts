import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
