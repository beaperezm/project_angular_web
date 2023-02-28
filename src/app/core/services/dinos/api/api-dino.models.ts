//interface con todos los datos que vienen de la API

export interface ApiDino {
    _id: string,
    name: string,
    nameMeaning: string,
    type: string,
    weight: string,
    length: string,
    height: string,
    historicalPeriod: DinoHistoricalPeriod,
    picture: string,
    foundIn: string[],
    diet: string,
    characteristics: string,
    locomotion: string,
    habitat: string,
    facts: string[],
    createdAt?: string,
    updatedAt?: string
}

export type DinoHistoricalPeriod = 
'Período Triásico'
| 'Período Jurásico'
| 'Período Cretácico';

// export type DinoType =
// 'Herbívoro'
// | 'Carnívoro'
// | 'Omnívoro';