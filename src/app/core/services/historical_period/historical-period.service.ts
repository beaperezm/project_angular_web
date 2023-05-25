import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiHistoricalPeriod } from './api/api-historical-periods.model';
import { ApiHistoricalPeriodService } from './api/api-historical-periods.service';
import { HistoricalPeriod } from './historical-period.models';

@Injectable({
  providedIn: 'root'
})
export class HistoricalPeriodService {

  //The service that has the historical periods of the api ==> ApiHistoricalPeriodService
  constructor(private apiHistoricalPeriodService: ApiHistoricalPeriodService) { }

  public getHistoricalPeriods(): Observable<HistoricalPeriod[]> {
    return this.apiHistoricalPeriodService.getApiHistoricalPeriods().pipe(
      map((apiHistoricalPeriods: ApiHistoricalPeriod[]) => {
        //is going to return an object only with the info I am interested in, for this I have put
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

