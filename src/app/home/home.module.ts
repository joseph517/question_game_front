import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GamesComponent } from './pages/games/games.component';
import { RankingComponent } from './pages/ranking/ranking.component';



@NgModule({
  declarations: [
    DashboardComponent,
    GamesComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
