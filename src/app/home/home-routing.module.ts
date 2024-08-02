import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { GamesComponent } from "./pages/games/games.component";
import { RankingComponent } from "./pages/ranking/ranking.component";
import { GameListComponent } from "./pages/game-list/game-list.component";
import { GameFormComponent } from "./pages/game-form/game-form.component";


const routes: Routes = [

    {
        path: '',
        component: DashboardComponent,
        children: [
            { 
                path: 'games', 
                component: GamesComponent,
                children: [
                    { path: 'list', component: GameListComponent },
                    { path: 'form', component: GameFormComponent },
                    { path: '**', redirectTo: 'list' }
                ]
            },
            { path: 'ranking/:id', component: RankingComponent },
            { path: '**', redirectTo: 'games' }
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }