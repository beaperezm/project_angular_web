import { HistoricalPeriod } from "../historical_period/historical-period.models";
import { ApiDino } from "./api/api-dino.models";
import { Dino } from "./dino.models";


export function transformDino(dinoEl: ApiDino, selectedHistoricalPeriod?: HistoricalPeriod): Dino {
    //En esta función:
     //estoy borrando las propiedades createdAt y updatedAt que son las que he decidido que no voy a usar en mi dino.models.ts (es info que me ha generado Mongo)
    delete dinoEl.createdAt && dinoEl.updatedAt;
    //retorno el dinoEl sin el campo createdAt y updatedAt
    return {
        ...dinoEl,//coge la info de ApiDino y hace una copia
        historicalPeriod: selectedHistoricalPeriod ? selectedHistoricalPeriod : {period: dinoEl.historicalPeriod}
};
}