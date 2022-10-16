import {spawn} from 'child_process'
import {Tickets} from '../../db/data'
import s from './Table.module.scss'

export function Table() {

    const TableHeads = Object.keys(Tickets[0])

    return (
        <div className={s.wrapper} >
            <table>
                <tbody>
                    <tr>
                        {TableHeads.map((head) => {
                            return (
                                <th key={head}>
                                    {head}
                                </th>
                            )
                        })}
                    </tr>
                    {Tickets.map((ticket) => {
                        return (
                            <tr key={ticket.id} >
                                {Object.keys(ticket).map((keyName, index) =>
                                    <td key={index} >
                                        {/* @ts-ignore */}
                                        {ticket[keyName]}
                                        {keyName === 'barcode' &&
                                            <>
                                                <span>XX</span>
                                                <span>[{ticket.ticket_adult_quantity + ticket.ticket_kid_quantity}]</span>
                                            </>
                                        }
                                    </td>
                                )}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <p>
                <b>Задание 1 - льготные билеты</b>
                <br />
                Для добавления опциональных билетов достаточно всего 2 новых поля: тип скидки и ее размер,
                при таком раскладе можно будет просто расширять тип скидки, не ломая верстку страницы.
                P.S. подразумевается , что все расчеты происходят на бэкенде.
                <code>
                    sale_type: 'group' | 'special' | 'none' 
                    <br />
                    discont: number
                </code>
            </p>
            <p>
                <b>Задание 2 - штрихкод</b>
                <br />
                Для добавления номера билета надо в сам штрихкод добавить опциональный знак, обозначающий порядковый номер билета.
                В самой таблице и задании нет требования по отображению кто когда зачекинился.
                Поэтому достаточно отобразить для штрихкода допзнаки (красным) и показать макс знак в [].
            </p>
        </div>
    )
}