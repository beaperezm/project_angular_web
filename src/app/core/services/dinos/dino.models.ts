import { HistoricalPeriod } from "../historical_period/historical-period.models";

//interface con los datos que voy a usar

export interface Dino {
    _id: string,
    name: string,
    nameMeaning: string,
    type: string,
    weight: string,
    length: string,
    height: string,
    historicalPeriod: HistoricalPeriod, //interface creada en historical-period.models.ts
    picture: string,
    characteristics: string,
}
