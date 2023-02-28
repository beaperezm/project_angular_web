import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiHistoricalPeriod } from './api/api-historical-periods.model';
import { ApiHistoricalPeriodService } from './api/api-historical-periods.service';
import { HistoricalPeriod } from './historical-period.models';

@Injectable({
  providedIn: 'root'
})
export class HistoricalPeriodService {

  //El servicio que tiene los períodos históricos de la api ==>  ApiHistoricalPeriodService
  constructor(private apiHistoricalPeriodService: ApiHistoricalPeriodService) { }

  public getHistoricalPeriods(): Observable<HistoricalPeriod[]> {
    return this.apiHistoricalPeriodService.getApiHistoricalPeriods().pipe(
      map((apiHistoricalPeriods: ApiHistoricalPeriod[]) => {
        //va a devolver un objeto solo con la info que me interesa para ello he puesto
        return apiHistoricalPeriods.map((apiHistoricalPeriod) => ({
          _id: apiHistoricalPeriod._id,
          period: apiHistoricalPeriod.period,
          stage: apiHistoricalPeriod.stage,
          description: apiHistoricalPeriod.description
        }));
      })
    );
  }
}

