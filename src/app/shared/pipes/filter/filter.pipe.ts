import { Pipe, PipeTransform } from '@angular/core';
import { DinoHistoricalPeriod } from 'src/app/core/services/dinos/api/api-dino.models';
import { Dino } from 'src/app/core/services/dinos/dino.models';


@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {
//Value: siempre es el valor que le entra a la pipe (el array de los dinos)
  transform(value: Dino[] | null, historicalPeriod?: DinoHistoricalPeriod): Dino[] {
    if (!value) { return []; } //sino hay valor devolver array vacío
    if (!historicalPeriod) { return value; } //sino hay período histórico devolver el array de dinos) sin modificar
    return value.filter((dinoPeriod) => { //si sí que hay valor filtrar que devuelva el valor del period indicado en el select y que coincida con el del historicalPeriod
      return dinoPeriod.historicalPeriod.period === historicalPeriod
    })
  }
}
