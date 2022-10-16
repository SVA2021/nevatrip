import {Link} from 'react-router-dom';
import {TimeLabel} from '../TimeLabel';
import s from './TripCard.module.scss';
import {TripCardProps} from './TripCard.types';
import {ReactComponent as ClockIcon} from '../../icon/clock.svg'
import {CardLabel} from '../CardLabel/CardLabel';
import classNames from 'classnames'
import {useState} from 'react';

export const TripCard = ({item}: TripCardProps) => {

    const [isVisible, setIsVisible] = useState<boolean>(item.shipments.length <= 4)

    return (
        <div className={s.card__wrapper} >
            {item.label && <CardLabel label={item.label} />}
            <img className={s.card__image} src={item.image[0]} alt="красивый пейзаж Питера" />
            <div className={s.card__content} >
                <div className={s.card__title} >
                    <p className={s.card__duration}>
                        <ClockIcon />
                        <span>{item.duration}</span>
                    </p>
                    <h3>
                        <span className={s.card__title__pre} >АКЦИЯ - </span>
                        {item.name}
                    </h3>
                </div>
                <ul className={s.card__features} >
                    {
                        item.features.map((feature, index) => {
                            return (
                                <li className={s.features__item} key={index} >
                                    {feature}
                                </li>
                            )
                        })
                    }
                    <li className={s.features__item} >
                        <div className={s.shipments}>
                            <p>Ближайший рейс сегодня</p>
                            <div className={s.card__shipment} >
                                {item.shipments.map((time, index) => (isVisible || index < 3) && <TimeLabel time={time} key={index} />)}
                                {!isVisible &&
                                    <button className={s.card__btn} onClick={() => setIsVisible(true)} >
                                        еще...
                                    </button>
                                }
                            </div>
                        </div>
                    </li>
                </ul>
                <div className={s.card__details} >
                    <div className={s.details__price} >
                        <p className={s.price__main}>
                            {item.price.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})}
                        </p>
                        {
                            item.price_now &&
                            <p className={s.price__now}>
                                {item.price_now.toLocaleString('ru-Ru', {style: 'currency', currency: 'RUB', maximumFractionDigits: 0})}
                                <span>
                                    на причале
                                </span>
                            </p>
                        }
                    </div>
                    <a href={'www.google.com'} className={s.details__link} >
                        Подробнее
                    </a>
                </div>
            </div>
        </div>
    )
}