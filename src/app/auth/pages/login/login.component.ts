import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../../interfaces/auth.interface';

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

    email: new FormControl('', [Validators.required, Validators.email], ),
    password: new FormControl('', Validators.required)

  });

  onSubmit() {
    if (!this.loginForm.valid){
      console.log('Formulario no válido');
      return;
    }

    const payLoad: UserLogin = {
      email: this.loginForm.get('email')?.value!,
      password: this.loginForm.get('password')?.value!
    }

    this.authService.login(payLoad)      
      .subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/home/dashboard']);
      },
    (err) => {
      console.log(err);
    });

  }

  isValidField(field: string){

    return this.authService.isValidField(this.loginForm, field);


  }

}
