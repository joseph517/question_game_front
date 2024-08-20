import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent
    ]
})
export class SharedModule { }
