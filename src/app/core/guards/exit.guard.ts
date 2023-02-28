import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateDinoComponent } from 'src/app/pages/create-dino/create-dino.component';


@Injectable({
  providedIn: 'root'
})

//Va a permitir o no que el usuario abandone una página (sin antes confirmar)

export class ExitGuard implements CanDeactivate<CreateDinoComponent> {
  canDeactivate(

    //Añado el componente en el quiero usar el canDeactivate (que el user no pueda salir sin antes aceptar un mensaje)
    component: CreateDinoComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { //nextState es la ruta de la que el user está intentado salir -- tiene que devolver boolean y/o urlTree
    
      //si el dino si está creado o el formulario no se ha tocado no hay que mostrar el window.confirm
      if(component?.isDinoCreated || !component?.dinoForm?.dirty) { return true; }
    //sino saldrá el window.confirm para que el ususario acepte si quiere o no salir
      return window.confirm('¿Deseas salir? No se guardarán los datos'); 
      }
  }

