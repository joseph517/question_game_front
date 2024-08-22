import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';
import { Form, FormGroup } from '@angular/forms';
import { TokenLogin, UserLogin } from '../interfaces/auth.interface';
import { Observable, of, take, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(

    private http: HttpClient

  ) { }

  /**
   * Checks if a field in a FormGroup is valid and has been touched.
   *
   * @param {FormGroup} form - The FormGroup to check the field in.
   * @param {string} field - The name of the field to check.
   * @return {boolean | null} - Returns true if the field is valid and has been touched,
   *                            false if the field is invalid or has not been touched,
   *                            and null if the field does not exist in the FormGroup.
   */
  isValidField(form: FormGroup, field: string): boolean | null {
    
    return form.controls[field].errors && form.controls[field].touched
  }

  login(form: UserLogin): Observable<TokenLogin> {

    return this.http.post<TokenLogin>(`${this.baseUrl}/token/`, form)
    .pipe(
      tap((res)=>{
        console.log(res);
        sessionStorage.setItem('access_token', res.access_token);
        localStorage.setItem('userName', res.name);
        localStorage.setItem('rol', JSON.stringify(res.rol));
        localStorage.setItem('user_id', JSON.stringify(res.user_id));
      })
    );

  }

  logout(){
    sessionStorage.removeItem('access_token');
  }

  getUserData() {

    return localStorage.getItem('userName');
  }

  checkAuthentication(): boolean {
    if (!sessionStorage.getItem('access_token')) return false;
    return true;
  }


}
