export interface TicketData {
    id: number
    event_id: string
    event_date: string
    ticket_adult_price: number
    ticket_adult_quantity: number
    ticket_kid_price: number
    ticket_kid_quantity: number
    sale_type: 'group' | 'special' | 'none'
    discont: number
    barcode: number
    user_id: string
    equal_price: number
    created: string
}