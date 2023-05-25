import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ApiDino, DinoHistoricalPeriod } from 'src/app/core/services/dinos/api/api-dino.models';
import { ApiDinosService } from 'src/app/core/services/dinos/api/api-dinos.service';
import { historicalPeriod } from 'src/app/core/services/dinos/dino-data';
import { Dino } from 'src/app/core/services/dinos/dino.models';
import { DinosService } from 'src/app/core/services/dinos/dinos.service';


@Component({
  selector: 'app-dino-list',
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.scss']
})
export class DinoListComponent implements OnInit{

  public dinoName: string = '';
  public dinoPeriod?: DinoHistoricalPeriod;
  public historicalPeriodEl: DinoHistoricalPeriod[] = historicalPeriod;
  public currentPage: number = 1;
  public itemsPage: number = 6;
  public dino?: Dino;
  public dinos: Dino[] = [];

  constructor(
    //service that brings the transformed information
    private dinosService: DinosService,
    private router: Router) {}

  public ngOnInit(): void {
    this.dinosService.getDinos().subscribe((dinosFromApi) => {
      //I listen to the values emitted from the Api and store them in my own array of dinos
      this.dinos = dinosFromApi;
    })
  }

  //method that will eliminate the dino of my choice
  public removeDinoFromList(id: string) {
    if(!id) { return; }
    //delete dino
    this.dinosService.deleteDino(id).pipe(
      //concatenate to obtain the new dinos (without the deleted one)
      switchMap((dino) => {
        return this.dinosService.getDinos(); 
      })
    )
    //keep dinos
    .subscribe((dinosFromApi) => {
      this.dinos = dinosFromApi;
    });
    }

    public getDinoDetail(id:string) {
      this.dinosService.getDinoDetail(id).subscribe((dinoDetail) => {
        this.router.navigate(['detail', dinoDetail._id])
      })
    }

    public nextPage() {
      ++this.currentPage
    }

    public prevPage() {
      --this.currentPage
  }

}
