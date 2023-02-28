import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHistoricalPeriod } from './api-historical-periods.model';


const API_HISTORICALPERIOD_URL = "https://project-angular-api-f9ie.vercel.app/historicalperiod"

@Injectable({
  providedIn: 'root'
})


export class ApiHistoricalPeriodService {

  constructor(private http: HttpClient) { }

  public getApiHistoricalPeriods(): Observable<ApiHistoricalPeriod[]>{
    return this.http.get<ApiHistoricalPeriod[]>(API_HISTORICALPERIOD_URL)
  }
}
