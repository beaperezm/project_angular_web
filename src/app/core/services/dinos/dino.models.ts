import { HistoricalPeriod } from "../historical_period/historical-period.models";

//interface with the data I am going to use

export interface Dino {
    _id: string,
    name: string,
    nameMeaning: string,
    type: string,
    weight: string,
    length: string,
    height: string,
    historicalPeriod: HistoricalPeriod, //interface created in historical-period.models.ts
    picture: string,
    characteristics: string,
}
