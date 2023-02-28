import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinoListRoutingModule } from './dino-list-routing.module';
import { DinoListComponent } from './dino-list.component';
//import { DinoComponent } from './components/dino/dino.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DinoListComponent
  ],
  imports: [
    CommonModule,
    DinoListRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    DinoListComponent
  ]
})
export class DinoListModule { }
