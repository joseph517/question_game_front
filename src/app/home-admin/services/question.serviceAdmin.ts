import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Observable } from 'rxjs';
import { Question } from '../interface/home-admin.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

    private baseUrl: string = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) { }

    getQuestionList(): Observable<Question[]> {
        return this.http.get<Question[]>(`${this.baseUrl}/questions/list/`)
    }
    
}