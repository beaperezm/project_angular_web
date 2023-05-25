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

  //with this output I allow in dino-list.html and your-dinos.html to call removeDino
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();

  //with this output I allow in dino-list.html and your-dinos.html to call navigateToDetail
  @Output() public onDetail: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router){}

  public navigateToDetail() {
    this.onDetail.emit()
  }

  //function is created with logic to eliminate the dinosaur
  public removeDino() {
   this.onRemove.emit()
  }

  public editDino() {
    //the queryParams option with which we want to do the navigation
    this.router.navigate(['create-dino'], {queryParams: {
      id: this.dino?._id
    }});
  }
}

