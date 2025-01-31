import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { GamesComponent } from "./pages/games/games.component";
import { GameListComponent } from "./pages/game-list/game-list.component";
import { QuestionsListComponent } from "./pages/questions-list/questions-list.component";


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
                    { path: 'questions-list/:id', component: QuestionsListComponent },
                    { path: '**', redirectTo: 'list' }
                ]
            },
            { path: '**', redirectTo: 'games' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }