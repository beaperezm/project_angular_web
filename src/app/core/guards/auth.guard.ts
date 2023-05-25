import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})

//It will allow or not allow the user to access certain pages depending on whether or not he/she is logged in.

export class AuthGuard implements CanActivate {

  constructor(
    //to know if the user is logged in or not.
    private auth: AuthService,
    //to navigate to the urlTree I have specified (login)
    private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot, //active route information

    //condition of the route
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.auth.userLogged$.pipe(
      //the guard looks at the value of the userLogged and depending on that it passes or not.
      take(1),
      map((isLogged: boolean) => {
        if(isLogged) {return true; }
        return this.router.createUrlTree(['login'])
      }))
  }
  
}
