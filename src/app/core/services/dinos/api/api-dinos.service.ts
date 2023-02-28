import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dino } from '../dino.models';
import { ApiDino } from './api-dino.models';


//Para poder hacer peticiones a la API con HTTPClient (importado en app)

//URL de la API 
const API_DINO_URL = "https://project-angular-api-f9ie.vercel.app"

@Injectable({
  providedIn: 'root'
})

export class ApiDinosService {


  constructor(
    private http: HttpClient
  ) { }


  //Peticiones de los dinosaurios
    
    //ApiDino[] --> devuelve un array porque devuelve todos los dinos
    public getApiDinos(): Observable<ApiDino[]> {
    return this.http.get<ApiDino[]>(`${API_DINO_URL}/dinosaurs`);
   }

   
   //ApiDino porque es el que tiene el dato transformado con los datos que yo he elegido (devuelve un solo Dino)
   public getApiDinoDetail(id: string): Observable<ApiDino> {
    return this.http.get<ApiDino>(`${API_DINO_URL}/dinosaurs/${id}`);
   }

   public deleteApiDino(id: string): Observable<ApiDino> {
    return this.http.delete<ApiDino>(`${API_DINO_URL}/dinosaurs/${id}`);
   }

   public editApiDino(id: string, body: Dino): Observable<ApiDino> {
    return this.http.put<ApiDino>(`${API_DINO_URL}/dinosaurs/${id}`, body);
   }


   //Peticiones de los dinosaurios creados por el usuario
   
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

