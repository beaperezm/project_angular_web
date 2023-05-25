import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, tap } from 'rxjs';  
import { HistoricalPeriodService } from '../historical_period/historical-period.service';
import { LoadingService } from '../loading/loading.service';
import { ApiDino } from './api/api-dino.models';
import { ApiDinosService } from './api/api-dinos.service';
import { Dino } from './dino.models';
import { transformDino } from './dinos.helpers';

@Injectable({
  providedIn: 'root'
})

//TRANSFORMED SERVICE
//is the one that has the model that we want - with the data we have chosen from the api

export class DinosService {

  constructor(
    private apiDinosService: ApiDinosService, 
    private historicalPeriodService: HistoricalPeriodService,
    private loadingService: LoadingService) { }

  //Create the method

  //FOR DINOSAURS

 //Dino Array already transformed
  public getDinos(): Observable<Dino[]> {
    //before retrieving the dinos show the loading
    this.loadingService.showLoading();
   
    //with pipe I concatenate actions 
    return this.apiDinosService.getApiDinos().pipe(
      //map receives the api dinos and returns the transformed data
      map((dinos: ApiDino[]) => {
        //dinos.map --> transforms each one of the ApiDinos --> into a dino
        //tranformDino is the function that returns a copy without the fields that I have decided on
        return dinos.map((dino) => transformDino(dino));
      }),
      //once it has displayed the dinos the loading is removed; tap does not affect the value returned by the service
      tap(() => this.loadingService.hideLoading())
    );
  }
  
    //is going to be the observable of a single dino
    public getDinoDetail(id: string): Observable<Dino> {
      //forkJoin --> to combine requests for dinos and historical periods
      return forkJoin([
        this.apiDinosService.getApiDinoDetail(id),
        this.historicalPeriodService.getHistoricalPeriods()
      ]).pipe(
        map(([apiDino, historicalPeriods]) => {
         
          //inside historicalPeriods I am looking for which historical period has the same name as apiDino and I pass it to the function: transformDino
          const selectedHistoricalPeriod = historicalPeriods.find((historicalPeriod) => historicalPeriod.period === apiDino.historicalPeriod);
          return transformDino(apiDino, selectedHistoricalPeriod);
        })
      )
    }


     //to deleteDino I pass the id which is the value I want to be taken into account when deleting
    public deleteDino(id: string): Observable<Dino> {
      return this.apiDinosService.deleteApiDino(id).pipe(
        map(dino => transformDino(dino))
      );
    }

    public editDino(id: string, body: Dino): Observable<Dino> {
      return this.apiDinosService.editApiDino(id, body).pipe(
        map((dino) => transformDino(dino))
      );
    }

      //FOR DINOSAURS CREATED BY THE USER

    public getYourDinos(): Observable<Dino[]> {
      this.loadingService.showLoading();
      return this.apiDinosService.getApiYourDino().pipe(
        map((yourDinos: ApiDino[]) => {
          return yourDinos.map((yourDino) => transformDino(yourDino));
        }),
        tap(() => this.loadingService.hideLoading())
      )
  }

  public getYourDinoDetail(id: string): Observable<Dino> {
    return this.apiDinosService.getApiYourDinoDetail(id).pipe(
      map(apiDino => transformDino(apiDino))
    );
  }

  public deleteYourDino(id: string): Observable<Dino> {
    return this.apiDinosService.deleteApiYourDino(id).pipe(
      map(dino => transformDino(dino))
    );
  }

  public createYourDino(body: Dino): Observable<Dino> {
    return this.apiDinosService.createApiYourDino(body).pipe(
      map((dino) => transformDino(dino))
    )
  }

  public editYourDino(id: string, body: Dino): Observable<Dino> {
    return this.apiDinosService.editApiYourDino(id, body).pipe(
      map((dino) => transformDino(dino))
    );
  }

}
