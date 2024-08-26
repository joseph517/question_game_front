import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Observable } from 'rxjs';
import { Question, QuestionCreate } from '../interface/home-admin.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

    private baseUrl: string = environment.baseUrl;

    constructor(
        private http: HttpClient
    ) { }

    getQuestionList(): Observable<Question[]> {
        return this.http.get<Question[]>(`${this.baseUrl}/questions/list/`)
    }

    createQuestion(question: QuestionCreate): Observable<Question> {
        return this.http.post<Question>(`${this.baseUrl}/questions/create/`, question)
    }

    deleteQuestion(question_id: number): Observable<Question> {
        return this.http.delete<Question>(`${this.baseUrl}/questions/delete/${question_id}/`)
    }
    
}