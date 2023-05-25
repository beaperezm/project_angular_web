import { Pipe, PipeTransform } from '@angular/core';
import { DinoHistoricalPeriod } from 'src/app/core/services/dinos/api/api-dino.models';
import { Dino } from 'src/app/core/services/dinos/dino.models';


@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {
//Value: is always the value that enters the pipe (the array of the dinos)
  transform(value: Dino[] | null, historicalPeriod?: DinoHistoricalPeriod): Dino[] {
    if (!value) { return []; } //if there is no value return empty array
    if (!historicalPeriod) { return value; } //if there is no historical period return the array of dinos) unmodified
    return value.filter((dinoPeriod) => { //if there is a value filter to return the value of the period indicated in the select and matching the historicalPeriod value
      return dinoPeriod.historicalPeriod.period === historicalPeriod
    })
  }
}
