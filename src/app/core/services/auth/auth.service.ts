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


  //el (1) va a decir si el user se loguea o no
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    //el usuario está o no logueado de inicio - por ello dentro del constructor
    this.userLogged$.next(this.isLogged());
   }

   //Pasa a true cuando se loguea
   public login(user: IUser): Observable<IUserSignInResponse> {
    return this.http.post<IUserSignInResponse>(`${AUTH_URL}/login`, user).pipe(
      tap((res: IUserSignInResponse) => {
        //lo que se guarda en localStorage siempre es un string
        const userToStore = JSON.stringify({
          token: res.token,
          id: res.user._id,
          email: res.user.email,
          firstName: res.user.firstName
        });
        //setItem guarda un valor con la clave que nosotros queramos en el localStorage
        localStorage.setItem(TOKEN_KEY, userToStore);
        this.userLogged$.next(true);
        this.router.navigate(['dinosaurs-list'])
      })
    )
   }

   //Hace el post del registro
   public register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${AUTH_URL}/register`, user)
   }

   //Pasa a false cuando hace logout
   public logout() {
    //removeItem devuelve null si el el token no existe
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.userLogged$.next(false);
    if(removeToken !== null) {
      this.router.navigate([''])
    }
   }

   //Para consultar si el usuario está logueado o no
   public isLogged(): boolean {
    //cogemos el localStorage y buscamos con getItem el token 
    const authToken = localStorage.getItem(TOKEN_KEY);
    //revisamos que si no hay token nos devuelva false
    if(!authToken) { return false;}
    const isValidToken = JSON.parse(authToken)?.token; //devuelve true o false
    return !!isValidToken;
   }

   //Para obtener el token actual
   public getToken() {
    const authToken = localStorage.getItem(TOKEN_KEY);
    //devuelveme el token sino devuélve null
    return authToken ? JSON.parse(authToken)?.token : null;
   }
}
