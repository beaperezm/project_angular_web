import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DinoDetailRoutingModule } from './dino-detail-routing.module';
import { DinoDetailComponent } from './dino-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DinoDetailComponent
  ],
  imports: [
    CommonModule,
    DinoDetailRoutingModule,
    RouterModule
  ]
})
export class DinoDetailModule { }
