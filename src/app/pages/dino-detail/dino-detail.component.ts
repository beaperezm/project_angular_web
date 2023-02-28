import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dino } from 'src/app/core/services/dinos/dino.models';
import { DinosService } from 'src/app/core/services/dinos/dinos.service';

@Component({
  selector: 'app-dino-detail',
  templateUrl: './dino-detail.component.html',
  styleUrls: ['./dino-detail.component.scss']
})
export class DinoDetailComponent {

  public dino?: Dino;

  constructor(private activatedRoute: ActivatedRoute, private dinosService: DinosService) {

    //data es info sobre la ruta
    this.activatedRoute.data.subscribe((data) => {
      if(data[0]) {
        this.dino = data[0]
      }
    })
  }

}
