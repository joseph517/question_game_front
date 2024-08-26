import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, Ranking } from '../interface/home-admin.interface';
import { environment } from 'src/enviroments/enviroments';

@Injectable({providedIn: 'root'})
export class GameServiceAdmin {

  private baseUrl: string = environment.baseUrl;


    constructor(
        private http: HttpClient
    ) { }

    getGameList(): Observable<Game[]> {
        return this.http.get<Game[]>(`${this.baseUrl}/games/list/`)
    }

    createGame(game: Game): Observable<Game> {
        return this.http.post<Game>(`${this.baseUrl}/games/create/`, game)
    }

    deleteGame(game_id: number): Observable<Game> {
        return this.http.delete<Game>(`${this.baseUrl}/games/delete/${game_id}/`)
    }

    getRankingGame(idGame: number): Observable<Ranking[]> {
        return this.http.get<any>(`${this.baseUrl}/games/ranking/${idGame}/`)
    }
    
}