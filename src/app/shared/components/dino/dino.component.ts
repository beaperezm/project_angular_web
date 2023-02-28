import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Dino } from 'src/app/core/services/dinos/dino.models';

@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.scss']
})
export class DinoComponent {

  @Input() public dino?: Dino;

  //con este output permito en dino-list.html y your-dinos.html puedan llamar a removeDino
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();

  //con este output permito en dino-list.html y your-dinos.html puedan llamar a navigateToDetail
  @Output() public onDetail: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router){}

  public navigateToDetail() {
    this.onDetail.emit()
  }

  //se crea la función con la lógica para elimine el dinosaurio
  public removeDino() {
   this.onRemove.emit()
  }

  public editDino() {
    //la opción queryParams con la que queremos hacer la navegación
    this.router.navigate(['create-dino'], {queryParams: {
      id: this.dino?._id
    }});
  }
}

