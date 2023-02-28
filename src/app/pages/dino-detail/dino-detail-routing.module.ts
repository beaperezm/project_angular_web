import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoDetailComponent } from './dino-detail.component';

const routes: Routes = [{
  path: '',
  component: DinoDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinoDetailRoutingModule { }
