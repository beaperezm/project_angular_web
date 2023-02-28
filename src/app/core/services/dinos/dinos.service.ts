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

//SERVICIO TRANSFORMADO
//es el que tiene el modelo que nosotros queremos - con los datos que hemos elegido de la api 

export class DinosService {

  constructor(
    private apiDinosService: ApiDinosService, 
    private historicalPeriodService: HistoricalPeriodService,
    private loadingService: LoadingService) { }

  //Crear el método

  //PARA LOS DINOSAURIOS

 //Array de Dino ya transformado
  public getDinos(): Observable<Dino[]> {
    //antes de recuperar los dinos muestre el loading
    this.loadingService.showLoading();
   
    //con pipe concateno acciones 
    return this.apiDinosService.getApiDinos().pipe(
      //map recibe los dinos de la api y devuelve los datos transformados
      map((dinos: ApiDino[]) => {
        //el dinos.map --> transforma cada uno de los ApiDinos --> en un dino
        //tranformDino es la función que devuelve una copia sin los campos que yo he decidido
        return dinos.map((dino) => transformDino(dino));
      }),
      //una vez que ha mostrado los dinos que se quite el loading; tap no afecta al valor que me devuelve el servicio
      tap(() => this.loadingService.hideLoading())
    );
  }
  
    //va a ser el observable de un solo dino
    public getDinoDetail(id: string): Observable<Dino> {
      //forkJoin --> para combinar las peticiones de dinos y períodos históricos
      return forkJoin([
        this.apiDinosService.getApiDinoDetail(id),
        this.historicalPeriodService.getHistoricalPeriods()
      ]).pipe(
        map(([apiDino, historicalPeriods]) => {
         
          //dentro de historicalPeriods estoy buscando qué periodo histórico tiene el mismo nombre que el de apiDino y se lo paso a la función: transformDino
          const selectedHistoricalPeriod = historicalPeriods.find((historicalPeriod) => historicalPeriod.period === apiDino.historicalPeriod);
          return transformDino(apiDino, selectedHistoricalPeriod);
        })
      )
    }


     //al deleteDino le paso el id que es el valor que quiero que tenga en cuanta a la hora de borrar
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

      //PARA LOS DINOSAURIOS CREADOS POR EL USUARIO

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
