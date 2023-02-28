import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourDinoDetailComponent } from './your-dino-detail.component';

const routes: Routes = [{
  path: '',
  component: YourDinoDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourDinoDetailRoutingModule { }
