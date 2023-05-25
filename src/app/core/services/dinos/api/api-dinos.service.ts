import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dino } from '../dino.models';
import { ApiDino } from './api-dino.models';


//To be able to make API requests with HTTPClient (imported in app)

//aPI url 
const API_DINO_URL = "https://project-angular-api-f9ie.vercel.app"

@Injectable({
  providedIn: 'root'
})

export class ApiDinosService {


  constructor(
    private http: HttpClient
  ) { }


  //Dinosaur requests
    
    //ApiDino[] --> returns an array because it returns all the dinos
    public getApiDinos(): Observable<ApiDino[]> {
    return this.http.get<ApiDino[]>(`${API_DINO_URL}/dinosaurs`);
   }

   
   //ApiDino because it is the one that has the data transformed with the data I have chosen (it returns only one Dino)
   public getApiDinoDetail(id: string): Observable<ApiDino> {
    return this.http.get<ApiDino>(`${API_DINO_URL}/dinosaurs/${id}`);
   }

   public deleteApiDino(id: string): Observable<ApiDino> {
    return this.http.delete<ApiDino>(`${API_DINO_URL}/dinosaurs/${id}`);
   }

   public editApiDino(id: string, body: Dino): Observable<ApiDino> {
    return this.http.put<ApiDino>(`${API_DINO_URL}/dinosaurs/${id}`, body);
   }


   //Requests for user-created dinosaurs
   
   public getApiYourDino(): Observable<ApiDino[]>{
    return this.http.get<ApiDino[]>(`${API_DINO_URL }/yourDinosaurs`)
  }

   public getApiYourDinoDetail(id: string): Observable<ApiDino> {
    return this.http.get<ApiDino>(`${API_DINO_URL}/yourDinosaurs/${id}`);
   }

   public deleteApiYourDino(id: string): Observable<ApiDino> {
    return this.http.delete<ApiDino>(`${API_DINO_URL}/yourDinosaurs/${id}`);
   }

   public createApiYourDino(body: Dino): Observable<ApiDino> {
    return this.http.post<ApiDino>(`${API_DINO_URL}/yourDinosaurs`, body);
   }

   public editApiYourDino(id: string, body: Dino): Observable<ApiDino> {
    return this.http.put<ApiDino>(`${API_DINO_URL}/yourDinosaurs/${id}`, body);
   }


}

