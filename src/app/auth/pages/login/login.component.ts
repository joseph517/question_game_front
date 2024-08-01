import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   constructor(

    private authService: AuthService,
    private router: Router

   ) { }

   public loginForm = new FormGroup({

    email: new FormControl<string>('', [Validators.required, Validators.email], ),
    password: new FormControl<string>('', Validators.required)

  });

  onSubmit() {

    console.log(this.loginForm.value);

    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value as Form)
      
      .subscribe(

        res => {

        localStorage.setItem('token', res.access);

        this.router.navigate(['/dashboard']);

      },

    (err) => {

      console.log(err);

    });

  }

}
