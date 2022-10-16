import {useState} from 'react'
import {TimeFromA, TimeFromB} from '../../db/data'
import s from './TimeCalc.module.scss'

export function TimeCalc() {

    const [direction, setDirection] = useState<string | undefined>()
    const [timeA, setTimeA] = useState<string | undefined>()
    const [timeB, setTimeB] = useState<string | undefined>()
    const [qty, setQty] = useState<number>(0)
    const [result, setResult] = useState<string | undefined>()

    const isReady = (
        (direction === 'A' && timeA)
        || (direction === 'B' && timeB)
        || (direction === 'AB' && timeA && timeB)
    )

    console.log(new Date(TimeFromA[0]))


    return (
        <div className={s.wrapper} >
            <div className={s.section}>
                <p>Выберите направление</p>
                <select className={s.select} name="route" onChange={(e) => setDirection(e.target.value)} >
                    <option value={undefined}>направление</option>
                    <option value={'A'}>из A в B</option>
                    <option value={'B'}>из B в A</option>
                    <option value={'AB'}>из A в B и обратно в А</option>
                </select>
            </div>

            {(direction === 'A' || direction === 'AB') &&
                <div className={s.section}>
                    <p>Выберите время отправления из А</p>
                    <select className={s.select} name="A" onChange={(e) => setTimeA(e.target.value)} >
                        <option value={undefined}>отправление из А</option>
                        {TimeFromA.map((time) =>
                            <option value={time} key={time} >{time}</option>
                        )}
                    </select>
                </div>}

            {(direction === 'B' || direction === 'AB') && timeA &&
                <div className={s.section}>
                    <p>Выберите время отправления из B</p>
                    <select className={s.select} name="B" onChange={(e) => setTimeB(e.target.value)} >
                        <option value={undefined}>отправление из В</option>
                        {TimeFromB.map((time) =>
                            <option value={time} key={time} >{time}</option>
                        )}
                    </select>
                </div>}

            {isReady &&
                <div className={s.section}>
                    <p>Количество билетов</p>
                    <input className={s.select} type="number" name="qty" onChange={(e) => setQty(+e.target.value)} />
                </div>
            }

            {isReady &&
                <button className={s.select} disabled={qty < 1} >
                    Посчитать
                </button>
            }

            {isReady && result &&
                <div className={s.result}>
                    Вы выбрали 4 билета по маршруту из A в B стоимостью 4000р.
                    Это путешествие займет у вас 40 минут.
                    Теплоход отправляется в 12-00, а прибудет в 18-00.
                </div>
            }


        </div>
    )
}