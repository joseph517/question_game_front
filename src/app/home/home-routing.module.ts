import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { GamesComponent } from "./pages/games/games.component";
import { RankingComponent } from "./pages/ranking/ranking.component";


const routes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'games', component: GamesComponent },
    { path: 'ranking', component: RankingComponent },
    { path: '**', redirectTo: 'dashboard' }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }