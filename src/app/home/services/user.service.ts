import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { GameList, QuestionList, RankingList } from '../interfaces/home.intercaces';
import { SharedService } from 'src/app/shared/services/shared.services';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private baseUrl: string = environment.baseUrl

    constructor(
        private http: HttpClient,
        private sharedService: SharedService
    ){ }
    getUsersData(): string {
        const userName = localStorage.getItem('userName');
        if(!userName) return '';
        return userName
    }

    getGameList(): Observable<GameList[]> {
        const token = this.sharedService.getToken();
        return this.http.get<GameList[]>(`${this.baseUrl}/games/list/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    getQuestionList(): Observable<QuestionList[]> {
        const token = this.sharedService.getToken();
        return this.http.get<QuestionList[]>(`${this.baseUrl}/questions/list/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    getRankingGame(idGame: string): Observable<RankingList[]> {
        const token = this.sharedService.getToken();
        return this.http.get<any>(`${this.baseUrl}/games/ranking/${idGame}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }    
    
}