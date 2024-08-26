import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { UserComponent } from './pages/user/user.component';
import { GamesComponent } from './pages/games/games.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { RakingComponent } from './pages/raking/raking.component';

const routes: Routes = [

  { 
    path: '', 
    component: DashboardAdminComponent,
    children: [
      { path: 'users', component: UserComponent},
      { path: 'games', component: GamesComponent},
      { path: 'questions', component: QuestionsComponent},
      { path: 'ranking-game/:id', component: RakingComponent},
      { path: '**', redirectTo: 'users' },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAdminRoutingModule { }
