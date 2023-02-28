import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourDinosComponent } from './your-dinos.component';

const routes: Routes = [{
  path: '',
  component: YourDinosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourDinosRoutingModule { }
