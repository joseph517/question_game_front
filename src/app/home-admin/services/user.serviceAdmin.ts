import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { User, AssignGameToUser, ListGameByUser } from '../interface/home-admin.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserServiceAdmin {

  private baseUrl: string = environment.baseUrl;


    constructor(
        private http: HttpClient,
    ) { }

    getUserList(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/users/list/`)
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/users/create/`, user)
    }

    deleteUser(user_id: number): Observable<User> {
        return this.http.delete<User>(`${this.baseUrl}/users/delete/${user_id}/`)
    }
    
    assignGameToUser(assignment: AssignGameToUser): Observable<AssignGameToUser> {
        return this.http.post<AssignGameToUser>(`${this.baseUrl}/games/assign/`, assignment)
    }

    getListGameByUserView(user_id: number): Observable<ListGameByUser[]> {
        return this.http.get<ListGameByUser[]>(`${this.baseUrl}/games/users/${user_id}/games/`)
    }
    
}