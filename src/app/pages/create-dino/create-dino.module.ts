import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDinoRoutingModule } from './create-dino-routing.module';
import { CreateDinoComponent } from './create-dino.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateDinoComponent
  ],
  imports: [
    CommonModule,
    CreateDinoRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class CreateDinoModule { }
