import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {


  constructor(
    //para poder hacer el logout
    private auth: AuthService,
  ){}

  //no hago el subscribe por el logout porq en este caso no es algo asíncrono
  public logoutUser() {
    this.auth.logout();  //va a permitir hacer el logout
  }

}
