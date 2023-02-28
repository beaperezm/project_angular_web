import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //Va a devolver si se debe mostrar el loading o no
  public shouldShowLoading$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  

  constructor() { 
    //Cuando se construya el servicio quiero que inicialmente no haya loading
    this.shouldShowLoading$.next(false);
  }

  //Se crean dos métodos: 

  //uno para mostrar el loading 
  public showLoading() {
    this.shouldShowLoading$.next(true);
  }

  //otro para ocultar el loading
  public hideLoading() {
    this.shouldShowLoading$.next(false);
  }
}


