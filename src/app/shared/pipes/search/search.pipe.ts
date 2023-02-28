import { Pipe, PipeTransform } from '@angular/core';
import { Dino } from 'src/app/core/services/dinos/dino.models';

//para crear pipe ng generate pipe <nombre de la pipe que yo quiera>

@Pipe({
  name: 'search',
  pure: false
})

//Para realizar la búsqueda hago un filtro del array de Dinos
export class SearchPipe implements PipeTransform {
  transform(value: Dino[] | null, name: string = ''): Dino[] {
    if (!value) { return []; }
    if (!name) { return value; }
    return value.filter((dino) => {
      return dino.name.toLowerCase().includes(name)
    })
  }

}
