import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourDinosRoutingModule } from './your-dinos-routing.module';
import { YourDinosComponent } from './your-dinos.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    YourDinosComponent
  ],
  imports: [
    CommonModule,
    YourDinosRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    YourDinosComponent
  ]
})
export class YourDinosModule { }
