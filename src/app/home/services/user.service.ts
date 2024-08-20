import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { Game, QuestionList, RankingList, Validate } from '../interfaces/home.intercaces';
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

    getGameList(): Observable<Game[]> {
        const token = this.sharedService.getToken();
        return this.http.get<Game[]>(`${this.baseUrl}/games/list/`)
    }

    getQuestionList(idGame: string): Observable<QuestionList[]> {
        return this.http.get<QuestionList[]>(`${this.baseUrl}/questions/list/${idGame}/`)
    }

    getRankingGame(idGame: string): Observable<RankingList[]> {
        const token = this.sharedService.getToken();
        return this.http.get<any>(`${this.baseUrl}/games/ranking/${idGame}/`)
    }
    
    getValidateQuestion(idQuestion: string, idOption: string): Observable<Validate> {
        const token = this.sharedService.getToken();
        const formData: FormData = new FormData();
        formData.append('question_id', idQuestion);
        formData.append('option_id', idOption);

        return this.http.post<Validate>(`${this.baseUrl}/questions/validate/`, formData)
    }
    
}