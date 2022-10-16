import s from './TimeLabel.module.scss'

export const TimeLabel = ({time}: {time: string}) => {
    return (
        <div className={s.label} >
            {time}
        </div>
    )
}