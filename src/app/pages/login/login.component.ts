import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from 'src/app/core/services/auth/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm?: FormGroup;
  public formError?: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group ({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]),
      firstName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\w*\d)\S{6,}$/)])
    })
  }

  public loginUser() {
    if(!this.loginForm?.valid) { return; }
    const user: IUser = this.loginForm.value;
    //the form would be copied and pasted, when the form is submitted is when the login would be done.
    this.auth.login(user).subscribe({
      next: (res) => {
        console.log(res),
        this.loginForm?.reset(); 
      },
      error: (err) => {
        //catches the error coming from the API
        this.formError = err.error,
        this.loginForm?.reset(); 
      }
    }); 
    this.router.navigate(['account']) //when you login you will access the account
  }
}
