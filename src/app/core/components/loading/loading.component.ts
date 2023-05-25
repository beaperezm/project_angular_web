import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

//To make the loading show up or not

  public showLoading$?: Observable<boolean>;

  constructor(private loadingService: LoadingService) {}

  public ngOnInit(): void {
    this.showLoading$ = this.loadingService.shouldShowLoading$;
  //I don't do the subscribe because I have used the async in the loading.component.html
  }
}
