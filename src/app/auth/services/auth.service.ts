import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Form } from '@angular/forms';
import { TokenLogin } from '../interfaces/auth.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(

    private http: HttpClient

  ) { }

  login(form: Form): Observable<TokenLogin> {

    return this.http.post<TokenLogin>(`${this.baseUrl}/token/`, form);
    
  }

}
