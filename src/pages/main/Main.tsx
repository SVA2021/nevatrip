import {TripCard} from "../../components/TripCard";
import {database} from "../../db/data";
import s from './Main.module.scss'

export function Main() {
    return (
        <div className={s.main} >
            {database.map((item) => <TripCard item={item} key={item.id} />)}
        </div>
    )
}