import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ){ }
    getUsersData(): string {

        const userName = localStorage.getItem('userName');
        
        if(!userName) return '';
        
        return userName
    } 
}