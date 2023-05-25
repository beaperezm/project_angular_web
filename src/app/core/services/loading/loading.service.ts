import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //It will return whether loading should be shown or not
  public shouldShowLoading$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  

  constructor() { 
    //When the service is built, I want there to be no loading initially
    this.shouldShowLoading$.next(false);
  }

  //Two methods are created: 

  //one to show the loading 
  public showLoading() {
    this.shouldShowLoading$.next(true);
  }

  //another to hide the loading
  public hideLoading() {
    this.shouldShowLoading$.next(false);
  }
}


