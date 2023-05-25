import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { IUser, IUserSignInResponse } from './models/auth.models';


const AUTH_URL = "https://project-angular-api-f9ie.vercel.app/user";
const TOKEN_KEY = 'user-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //the (1) will say if the user is logged in or not
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    //whether or not the user is logged in at startup - therefore inside the constructor
    this.userLogged$.next(this.isLogged());
   }

   //Goes to true when logged in
   public login(user: IUser): Observable<IUserSignInResponse> {
    return this.http.post<IUserSignInResponse>(`${AUTH_URL}/login`, user).pipe(
      tap((res: IUserSignInResponse) => {
        //what is stored in localStorage is always a string
        const userToStore = JSON.stringify({
          token: res.token,
          id: res.user._id,
          email: res.user.email,
          firstName: res.user.firstName
        });
        //setItem saves a value with the key we want in the localStorage
        localStorage.setItem(TOKEN_KEY, userToStore);
        this.userLogged$.next(true);
        this.router.navigate(['dinosaurs-list'])
      })
    )
   }

   //Makes registration post
   public register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${AUTH_URL}/register`, user)
   }

   //Set to false when logging out
   public logout() {
    //removeItem returns null if the token does not exist
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.userLogged$.next(false);
    if(removeToken !== null) {
      this.router.navigate([''])
    }
   }

   //To check if the user is logged in or not
   public isLogged(): boolean {
    //we take the localStorage and search with getItem for the token 
    const authToken = localStorage.getItem(TOKEN_KEY);
    //we check that if there is no token we return false
    if(!authToken) { return false;}
    const isValidToken = JSON.parse(authToken)?.token; //returns true or false
    return !!isValidToken;
   }

   //to get the current token
   public getToken() {
    const authToken = localStorage.getItem(TOKEN_KEY);
    //give me back the token otherwise return null
    return authToken ? JSON.parse(authToken)?.token : null;
   }
}
