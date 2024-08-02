import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/enviroments/enviroments';
import { GameList } from '../interfaces/home.intercaces';
import { SharedService } from 'src/app/shared/services/shared.services';
import { Token } from '@angular/compiler';

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

    
    
}