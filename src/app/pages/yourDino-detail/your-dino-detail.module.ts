import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourDinoDetailRoutingModule } from './your-dino-detail-routing.module';
import { YourDinoDetailComponent } from './your-dino-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    YourDinoDetailComponent
  ],
  imports: [
    CommonModule,
    YourDinoDetailRoutingModule,
    RouterModule
  ]
})
export class YourDinoDetailModule { }
