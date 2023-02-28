import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dino } from 'src/app/core/services/dinos/dino.models';
import { DinosService } from 'src/app/core/services/dinos/dinos.service';

@Component({
  selector: 'app-your-dino-detail',
  templateUrl: './your-dino-detail.component.html',
  styleUrls: ['./your-dino-detail.component.scss']
})
export class YourDinoDetailComponent {
  public dino?: Dino

  constructor(
    private activatedRoute: ActivatedRoute, 
    private dinosService: DinosService
    ) {
      
      this.activatedRoute.params.subscribe((params) => {
        const dinoId = params['id'];
        this.dinosService.getYourDinoDetail(dinoId).subscribe((dino) => {
          this.dino = dino;
        })
      });
      
    }
}
