import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroments';
import { User } from '../interface/home-admin.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserServiceAdmin {

  private baseUrl: string = environment.baseUrl;


    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    getUserList(): Observable<User[]> {
        return this.http.get<User[]>(`${this.baseUrl}/users/list/`)
    }
    
}