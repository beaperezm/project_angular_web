import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Dino } from 'src/app/core/services/dinos/dino.models';
import { DinosService } from 'src/app/core/services/dinos/dinos.service';


@Component({
  selector: 'app-your-dinos',
  templateUrl: './your-dinos.component.html',
  styleUrls: ['./your-dinos.component.scss']
})
export class YourDinosComponent implements OnInit{

  public dinoName: string = '';
  public currentPage: number = 1;
  public itemsPage: number = 6;
  public dino?: Dino;
 

  //is a Dino[] because it arrives already transformed (transformation of the observable dinos.service.ts and of the dino.models)
  public dinos: Dino[] = [];


  constructor(
    private dinosService: DinosService,
    private router: Router
    ) {}

  public ngOnInit(): void {
    this.dinosService.getYourDinos().subscribe((yourDinosFromApi) => {
      this.dinos = yourDinosFromApi
    })
   }

   public removeYourDinoFromList(id: string) {
    if(!id) { return; }
    //delete dino
    this.dinosService.deleteYourDino(id).pipe(
      //concatenate to obtain the new dinos (without the deleted one)
      switchMap((dino) => {
        return this.dinosService.getYourDinos(); 
      })
    )
    //I keep the dinos
    .subscribe((dinosFromApi) => {
      this.dinos = dinosFromApi;
    });
    }

    public getYourDinoDetail(id:string) {
      this.dinosService.getYourDinoDetail(id).subscribe((dinoDetail) => {
        this.router.navigate(['yourDinosaurs', dinoDetail._id])
      })
    }
  }


  

