export const FiftyMin = 50 * 60 * 1000

export function getDirectionMsg(direction: string) {
    switch (direction) {
        case 'A':
            return 'из A в B'
        case 'B':
            return 'из B в A'
        case 'AB':
            return 'из A в B и обратно в А'
        default:
            return 'никуда не едем'
    }
}

export function getDuration(timeA: string | undefined, timeB: string | undefined, direction: string) {
    if (direction === 'A' || direction === 'B') return new Date(FiftyMin)
    if (!timeA || !timeB) return new Date()
    let dateA = new Date(timeA)
    let dateB = new Date(timeB)
    let duration = new Date(FiftyMin + (+dateA) - (+dateB))
    return duration
}

export function convertTimeToMsg(duration: Date) {
    let hh = duration.getHours()
    let mm = duration.getMinutes()

    return hh === 0 ? `${mm} минут` : `${hh}ч ${mm}м`
}

export function getTicketMsg(qty: number) {
    if (qty % 100 !== 11 && qty % 10 === 1) return 'билет'
    if (qty % 100 !== 12 && qty % 10 === 2) return 'билета'
    if (qty % 100 !== 13 && qty % 10 === 3) return 'билета'
    if (qty % 100 !== 14 && qty % 10 === 4) return 'билета'

    return 'билетов'
}
export function getPrice(qty: number, direction: string) {
    if (direction === 'A' || direction === 'B') return 700 * qty
    return 1200 * qty
}

export function getLeftTime(timeA: string | undefined, timeB: string | undefined, direction: string,) {
    if ((direction === 'A' || direction === 'AB') && timeA) return new Date(timeA)
    if (direction === 'B' && timeB) return new Date(timeB)

    return new Date()
}

export function getArrivalTime(timeA: string | undefined, timeB: string | undefined, direction: string,) {
    if ((direction === 'A') && timeA) return new Date(+(new Date(timeA)) + +(new Date(FiftyMin)))
    if ((direction === 'B' || direction === 'AB') && timeB) return new Date(+(new Date(timeB)) + +(new Date(FiftyMin)))

    return new Date()
}

export function getResultMsg(timeA: string | undefined, timeB: string | undefined, direction: string, qty: number) {
    if (qty < 1) return `что то пошло не так`

    const tickets = `${qty} ${getTicketMsg(qty)}`
    const price = `${getPrice(qty, direction)}`
    const duration = convertTimeToMsg(getDuration(timeA, timeB, direction))
    const leftTime = convertTimeToMsg(getLeftTime(timeA, timeB, direction))
    const arrivalTime = convertTimeToMsg(getArrivalTime(timeA, timeB, direction))

    return `Вы выбрали ${tickets} по маршруту ${getDirectionMsg(direction)} стоимостью ${price}р.\n
    Это путешествие займет у вас ${duration}.\n
    Теплоход отправляется в ${leftTime}, а прибудет в ${arrivalTime}.`
}

