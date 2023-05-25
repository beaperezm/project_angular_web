import { Pipe, PipeTransform } from '@angular/core';
import { Dino } from 'src/app/core/services/dinos/dino.models';


@Pipe({
  name: 'search',
  pure: false
})

//For the search I make a filter of the Dinos array
export class SearchPipe implements PipeTransform {
  transform(value: Dino[] | null, name: string = ''): Dino[] {
    if (!value) { return []; }
    if (!name) { return value; }
    return value.filter((dino) => {
      return dino.name.toLowerCase().includes(name)
    })
  }

}
