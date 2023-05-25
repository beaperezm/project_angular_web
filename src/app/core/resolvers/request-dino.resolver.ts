import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dino } from '../services/dinos/dino.models';
import { DinosService } from '../services/dinos/dinos.service';


//The dinosaur detail view will not be displayed until all the information on that page has been loaded

@Injectable({
  providedIn: 'root'
})
export class RequestDinoResolver implements Resolve<Dino | null> { 
  //Returns a dino

  constructor(private dinoService: DinosService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dino | null > {
    const id = route.params['id'];
    if(!id) {return of(null); }
    return this.dinoService.getDinoDetail(id); 
  }
}
