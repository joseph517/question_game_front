import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard } from './auth/guards/public.guard';
import { AdminAuthGuard } from './home-admin/guards/admin-auth.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { UserAuthGuard } from './home-admin/guards/user-auth.guard';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [PublicGuard],
    canActivateChild: [UserAuthGuard]
  },
  { 
    path: 'home-admin',
    loadChildren: () => import('./home-admin/home-admin.module').then(m => m.HomeAdminModule),
    canActivateChild: [AdminAuthGuard]
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
