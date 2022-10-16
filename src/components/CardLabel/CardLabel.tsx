import classNames from 'classnames'
import {CardLabelType} from '../../types/types'
import s from './CardLabel.module.scss'

export const CardLabel = ({label}: {label: CardLabelType}) => {
    return (
        <div className={classNames(s.label, s[label.type])} >
            {label.description}
        </div>
    )
}