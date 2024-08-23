import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { MaterialModule } from '../material/material.module';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { UserComponent } from './pages/user/user.component';
import { GamesComponent } from './pages/games/games.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    DashboardAdminComponent,
    AdminNavbarComponent,
    UserComponent,
    GamesComponent,
    UserTableComponent
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
