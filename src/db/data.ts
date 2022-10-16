import {TripDetailType} from "../types/types";
import img_1 from '../img/spb_1.png'
import img_1_2x from '../img/spb_1_2x.png'
import {TicketData} from "../pages/table/Table.types";

export const database: TripDetailType[] = [
    {
        id: 0,
        name: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        duration: '2 часа',
        price: 900,
        price_now: 1200,
        features: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
        ],
        shipments: ['12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00',],
        label: {
            description: 'новинка',
            type: 'new'
        },
        image: [img_1, img_1_2x,],
    },
    {
        id: 1,
        name: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        duration: '2 часа',
        price: 2900,
        price_now: 3200,
        features: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
        ],
        shipments: ['12:00', '12:00',],
        label: {
            description: 'круглогодично',
            type: 'all_time'
        },
        image: [img_1, img_1_2x,],
    },
    {
        id: 2,
        name: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        duration: '2 часа',
        price: 900,
        price_now: 1200,
        features: [
            'Билет на целый день',
            'Неограниченное число катаний',
            '6 остановок у главных достопримечательностей',
        ],
        shipments: ['12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00',],
        label: {
            description: 'новинка',
            type: 'special'
        },
        image: [img_1, img_1_2x,],
    },
]

export const Tickets: TicketData[] = [
    {
        id: 1,
        event_id: '003',
        event_date: '2021-08-21 13:00:00',
        ticket_adult_price: 700,
        ticket_adult_quantity: 1,
        ticket_kid_price: 450,
        ticket_kid_quantity: 0,
        barcode: 11111111,
        user_id: '00451',
        equal_price: 700,
        created: '2021-01-11 13:22:09',
        sale_type: 'none',
        discont: 0,
    },
    {
        id: 2,
        event_id: '003',
        event_date: '2021-08-21 13:00:00',
        ticket_adult_price: 700,
        ticket_adult_quantity: 0,
        ticket_kid_price: 450,
        ticket_kid_quantity: 5,
        barcode: 11111111,
        user_id: '00451',
        equal_price: 700,
        created: '2021-01-11 13:22:09',
        sale_type: 'none',
        discont: 0,
    },
    {
        id: 3,
        event_id: '003',
        event_date: '2021-08-21 13:00:00',
        ticket_adult_price: 700,
        ticket_adult_quantity: 1,
        ticket_kid_price: 450,
        ticket_kid_quantity: 0,
        barcode: 11111111,
        user_id: '00451',
        equal_price: 700,
        created: '2021-01-11 13:22:09',
        sale_type: 'none',
        discont: 0,
    },
]