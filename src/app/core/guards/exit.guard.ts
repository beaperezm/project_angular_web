import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateDinoComponent } from 'src/app/pages/create-dino/create-dino.component';


@Injectable({
  providedIn: 'root'
})

//Whether or not to allow the user to leave a page (without first confirming)

export class ExitGuard implements CanDeactivate<CreateDinoComponent> {
  canDeactivate(

    //I add the component in which I want to use the canDeactivate (that the user cannot exit without first accepting a message)
    component: CreateDinoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { //nextState is the path the user is trying to exit from -- must return boolean and/or urlTree
    
      //if the dino is created or the form has not been touched, the window.confirm does not need to be displayed.
      if(component?.isDinoCreated || !component?.dinoForm?.dirty) { return true; }
    //otherwise the window.confirm will be displayed for the user to accept whether or not to exit.
      return window.confirm('¿Deseas salir? No se guardarán los datos'); 
      }
  }

