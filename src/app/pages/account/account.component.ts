import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {


  constructor(
    //to be able to logout
    private auth: AuthService,
  ){}

  //I do not subscribe for the logout because in this case it is not asynchronous
  public logoutUser() {
    this.auth.logout();  //it will allow to logout
  }

}
