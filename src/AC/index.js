import {INCREMENT, DELETE_ARTICLE, DATE_RANGE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function clickToDateRange(day) {
    return {
        type: DATE_RANGE,
        payload: {day}
    }
}