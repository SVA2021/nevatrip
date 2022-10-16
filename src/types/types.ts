export interface TripDetailType {
    id: number
    name: string
    duration: string
    price: number
    price_now: number | null
    features: string[]
    shipments: string[]
    label: CardLabelType | null
    image: string[]
}

export interface CardLabelType {
    description: string
    type: LabelType
}

export type LabelType = 'new' | 'all_time' | 'special' | 'sale'
export type Direction = 'A' | 'B' | 'AB'