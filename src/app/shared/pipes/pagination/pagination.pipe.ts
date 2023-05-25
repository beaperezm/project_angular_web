import { Pipe, PipeTransform } from '@angular/core';
import { Dino } from 'src/app/core/services/dinos/dino.models';

@Pipe({
  name: 'pagination',
  pure: false
})
export class PaginationPipe implements PipeTransform {

  transform(value: Dino[], itemsPage: number, currentPage: number = 0): Dino[] {
  
return value.slice((currentPage -1) * itemsPage, currentPage * itemsPage)  } //to get the top of the list and the end of the list

}
