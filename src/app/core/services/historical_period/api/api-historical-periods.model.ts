import { DinoHistoricalPeriod } from "../../dinos/api/api-dino.models"

export interface ApiHistoricalPeriod {
    _id: string,
    period: DinoHistoricalPeriod,
    stage: string,
    description: string,
    createdAt: string,
    updatedAt: string
}