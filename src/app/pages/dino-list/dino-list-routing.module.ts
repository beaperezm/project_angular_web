import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinoListComponent } from './dino-list.component';

const routes: Routes = [{
  path: '',
  component: DinoListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinoListRoutingModule { }
