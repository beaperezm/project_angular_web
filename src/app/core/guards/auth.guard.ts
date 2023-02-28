import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})

//Va a permitir o no que el usario acceda a ciertas páginas en función de si está o no logueado

export class AuthGuard implements CanActivate {

  constructor(
    //para saber si el usuario está o no logueado
    private auth: AuthService,
    //para navegar a la urlTree que le he indicado (login)
    private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot, //información de la ruta activa

    //estado de la ruta
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.auth.userLogged$.pipe(
      //la guardia mira que valor tiene el userLogged y en función de eso pasa o no
      take(1),
      map((isLogged: boolean) => {
        if(isLogged) {return true; }
        return this.router.createUrlTree(['login'])
      }))
  }
  
}
