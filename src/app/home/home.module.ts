import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GamesComponent } from './pages/games/games.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { QuestionsListComponent } from './pages/questions-list/questions-list.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';


import { MaterialModule } from '../material/material.module';
import { HomeAdminModule } from '../home-admin/home-admin.module';



@NgModule({
  declarations: [
    DashboardComponent,
    GamesComponent,
    GameCardComponent,
    GameListComponent,
    GameFormComponent,
    QuestionsListComponent,
    QuestionCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    HomeAdminModule
  ]
})
export class HomeModule { }
