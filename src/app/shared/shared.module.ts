import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { DinoComponent } from './components/dino/dino.component';


//Añadido en exports las pipes y el componente Dino - para poder 'compartirlos' 

@NgModule({
  declarations: [
    FilterPipe,
    PaginationPipe,
    SearchPipe,
    DinoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    PaginationPipe,
    SearchPipe,
    DinoComponent,
    CommonModule
  ]
})
export class SharedModule { }
