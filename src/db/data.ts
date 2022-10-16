import {TripDetailType} from "../types/types";
import img_1 from '../img/spb_1.png'
import img_1_2x from '../img/spb_1_2x.png'

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
        shipments: [ '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', ],
        label: {
            description: 'новинка',
            type: 'new'
        },
        image: [ img_1, img_1_2x, ],
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
        shipments: [ '12:00', '12:00',  ],
        label: {
            description: 'круглогодично',
            type: 'all_time'
        },
        image: [ img_1, img_1_2x, ],
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
        shipments: [ '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00', ],
        label: {
            description: 'новинка',
            type: 'special'
        },
        image: [ img_1, img_1_2x, ],
    },
]