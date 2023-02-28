import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlNotFoundComponent } from './url-not-found.component';

const routes: Routes = [{
  path: '',
  component: UrlNotFoundComponent
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlNotFoundRoutingModule { }
