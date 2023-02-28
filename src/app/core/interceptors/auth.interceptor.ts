import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


//Se va a ejecutar antes de que se lance cualquier petición a la API


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    //para saber si el usuario está o no logueado
    private authService: AuthService
  ) {}

  //Se ejecuta antes de la llamada a la api
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    //con esto consigo que todas las peticiones (las que yo he decidido en el backend) que se hagan a la api se les añada la cabecera con el token (en este caso el post, put y delete)
    if (token) {
      //request.clone hace una copia de la request actual a la que le añado la info setHeaders con Bearer + el token
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    //lo coge del servidor y comprueba si el token es correcto --> si lo es va funcionar
    return next.handle(request);
  }
}
