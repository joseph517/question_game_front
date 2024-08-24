import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor(
        private _snackBar: MatSnackBar,
        private router: Router
    ) { }
    
    getToken() {
        return sessionStorage.getItem('access_token');

    }
    
    logout(){
        localStorage.clear();
        sessionStorage.removeItem('access_token');
        this.router.navigate(['/auth/login']);
    }

    openSnackBar(message: string, action: string, duration?: number) {
        if(!duration) duration = 2000
        this._snackBar.open(message, action, {
            duration: duration
        });
    }
}