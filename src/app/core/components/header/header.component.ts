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
    //to navigate
    private router: Router,
    //to authenticate whether or not the user is logged in
    private auth: AuthService
    ){}

    public ngOnInit(): void {
      //that the isLogged variable is always equal to what comes from the observable - this way with the ngIf created in the header.component.html it will set account or login depending on whether the user is logged in or not.
      this.auth.userLogged$.subscribe((isLogged) =>  this.isLogged = isLogged);
    }


  public selectedRoute() {
    this.router.events.subscribe((event: Event) => {
      //if event belongs to NavigationEnd (angular router) - the current route will be equal to the event url
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    })
  }
 public showHamburger() {
  this.hamburguer = !this.hamburguer
 }
}
