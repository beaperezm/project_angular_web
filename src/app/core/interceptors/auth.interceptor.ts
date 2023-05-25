import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


//It will be executed before any API request is launched


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    //to know if the user is logged in or not
    private authService: AuthService
  ) {}

  //It is executed before the api call
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    //with this I get that all requests (the ones I have decided in the backend) that are made to the api are added the header with the token (in this case the post, put and delete)
    if (token) {
      //request.clone makes a copy of the current request to which I add the info setHeaders with Bearer + the token
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    //get it from the server and check if the token is correct --> if it is correct it will work
    return next.handle(request);
  }
}
