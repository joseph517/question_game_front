import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { SharedModule } from "../shared/shared.module";
import { MaterialModule } from '../material/material.module';

import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { UserComponent } from './pages/user/user.component';
import { GamesComponent } from './pages/games/games.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { RakingComponent } from './pages/raking/raking.component';
import { RankingTableComponent } from './components/ranking-table/ranking-table.component';
import { QuestionTableComponent } from './components/question-table/question-table.component';



@NgModule({
  declarations: [
    DashboardAdminComponent,
    AdminNavbarComponent,
    UserComponent,
    GamesComponent,
    UserTableComponent,
    GameTableComponent,
    QuestionsComponent,
    RakingComponent,
    RankingTableComponent,
    QuestionTableComponent
  ],
  imports: [
    CommonModule,
    HomeAdminRoutingModule,
    MaterialModule,
    SharedModule
],
  exports: [
    DashboardAdminComponent
  ]
})
export class HomeAdminModule { }
