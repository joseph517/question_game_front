import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    
    getToken() {
        return sessionStorage.getItem('access_token');
    }
}