import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentRoute?: string;
  public isLogged: boolean = false;
  public hamburguer: boolean = false;

  constructor(
    //para navegar
    private router: Router,
    //para autenticar si user está o no logged
    private auth: AuthService
    ){}

    public ngOnInit(): void {
      //que la variable isLogged sea siempre igual a lo que nos venga del observable - de esta forma con el ngIf creado en el header.component.html pondrá account o login en función de si el ususario está o no logueado
      this.auth.userLogged$.subscribe((isLogged) =>  this.isLogged = isLogged);
    }


  public selectedRoute() {
    this.router.events.subscribe((event: Event) => {
      //si event pertenece a NavigationEnd (enrutador de angular) - la ruta actual será igual a la url del evento
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    })
  }
 public showHamburger() {
  this.hamburguer = !this.hamburguer
 }

}
