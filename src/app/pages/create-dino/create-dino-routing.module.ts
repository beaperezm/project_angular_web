import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitGuard } from 'src/app/core/guards/exit.guard';
import { CreateDinoComponent } from './create-dino.component';

const routes: Routes = [{
  path: '',
  component: CreateDinoComponent,
  canDeactivate: [ExitGuard]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDinoRoutingModule { }
