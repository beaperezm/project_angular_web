import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserSignUp } from '../models/sign-up.models';
import { IApiUserSignUp } from './models/api-sign-up.models';


//For the registration - with the api data model

const SIGNUP_URL = "https://project-angular-api-f9ie.vercel.app/user";

@Injectable({
  providedIn: 'root'
})
export class ApiSignUpService {

  constructor(private http: HttpClient) { }

  public createApiUserSignUp(body: IUserSignUp): Observable<IApiUserSignUp> {
    return this.http.post<IApiUserSignUp>(`${SIGNUP_URL}/register`, body);
   }
}
