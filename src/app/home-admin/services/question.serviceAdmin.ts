import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroments';
import { Observable } from 'rxjs';
import { Question, QuestionCreate, Option } from '../interface/home-admin.interface';

@Injectable({providedIn: 'root'})
export class QuestionServiceAdmin {

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

    // OPTIONS

    createOption(option: Option): Observable<Option> {
        return this.http.post<Option>(`${this.baseUrl}/options/create/`, option)
    }

    deleteOption(option_id: number) {
        return this.http.delete(`${this.baseUrl}/options/delete/${option_id}/`)
    }
    
}