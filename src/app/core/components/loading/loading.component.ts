import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

//Para hacer que el loading se muestre o no

  public showLoading$?: Observable<boolean>;

  constructor(private loadingService: LoadingService) {}

  public ngOnInit(): void {
    this.showLoading$ = this.loadingService.shouldShowLoading$;
  //no hago el subscribe porque he usado el async en el loading.component.html
  }
}
