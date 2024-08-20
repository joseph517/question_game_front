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


   public onLoading = false;
   public hideModal = true;
   public loginForm = new FormGroup({

  email: new FormControl('', [Validators.required, Validators.email], ),
  password: new FormControl('', Validators.required)

  });

  onSubmit() {
    this.onLoading = true;
    setTimeout(() => {
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
          this.router.navigate(['/home/dashboard']);
        },
      (err) => {
        console.log('Error en el login');
        this.router.navigate(['/auth/login']);
        this.hideModal = false;
        this.onLoading = false;
        console.log(err);
      });
    }, 500)
  }

  isValidField(field: string){
    return this.authService.isValidField(this.loginForm, field);
  }

}
