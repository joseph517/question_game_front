import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { UserComponent } from './pages/user/user.component';
import { GamesComponent } from './pages/games/games.component';

const routes: Routes = [

  { 
    path: '', 
    component: DashboardAdminComponent,
    children: [
      { path: 'users', component: UserComponent},
      { path: 'games', component: GamesComponent},      
      { path: '**', redirectTo: 'users' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeAdminRoutingModule { }
