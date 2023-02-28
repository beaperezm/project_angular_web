import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dino } from '../services/dinos/dino.models';
import { DinosService } from '../services/dinos/dinos.service';


//No se va a mostrar la vista del detalle del dinosaurio hasta que se haya cargado toda la información de dicha página

@Injectable({
  providedIn: 'root'
})
export class RequestDinoResolver implements Resolve<Dino | null> { 
  //Devuelve un dino

  constructor(private dinoService: DinosService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dino | null > {
    const id = route.params['id'];
    if(!id) {return of(null); }
    return this.dinoService.getDinoDetail(id); 
  }
}
