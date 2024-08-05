import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    MatTableModule,
    MatCardModule,
    MatListModule
  ]
})
export class MaterialModule { }
