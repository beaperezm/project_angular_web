import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiSignUpService } from './api/api-sign-up.service';
import { IUserSignUp } from './models/sign-up.models';
import { transformUser } from './userSignUp.helpers';



@Injectable({
  providedIn: 'root'
})

//For registration with the transformed data model

export class SignUpService {
  
  constructor(
    private apiUserSignUpService: ApiSignUpService
  ) { }

  public createSignUpUser(body: IUserSignUp): Observable<IUserSignUp> {
    return this.apiUserSignUpService.createApiUserSignUp(body).pipe(
      map((user) => transformUser(user))
    )
  }
}
