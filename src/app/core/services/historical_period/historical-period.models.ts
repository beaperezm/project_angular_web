import { DinoHistoricalPeriod } from "../dinos/api/api-dino.models";

export interface HistoricalPeriod {
    _id?: string,
    period: DinoHistoricalPeriod,
    stage?: string,
    description?: string
}