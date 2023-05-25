import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserSignUp } from 'src/app/core/services/sign-up/models/sign-up.models';
import { SignUpService } from 'src/app/core/services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public signUpForm?: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signUpService: SignUpService) {

      //añado los campos del formulario con sus validadores
    this.signUpForm = this.formBuilder.group ({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\w*\d)\S{6,}$/)])
    })
  }

  public sendForm() {
    if(!this.signUpForm?.valid) { return; }
    const userSignUp: IUserSignUp = this.signUpForm?.value;
    this.signUpService.createSignUpUser(userSignUp).subscribe({
      //errors coming from the API
      next: (res) => {
        console.log(res),
        this.signUpForm?.reset();
      },
      error: (err) => {
        this.signUpForm = err.error,
        this.signUpForm?.reset();
      }
    });
      this.router.navigate(['login'])
    }
  }


