import { ConfigDto } from './config.model'

export type Plan = Record<number, { active: ConfigDto, planned: ConfigDto }> // number ~ neId
