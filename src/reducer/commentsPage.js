import { LOAD_COMMENTS_PAGE, START, SUCCESS } from '../constants'
import { Map, Record } from 'immutable'

const defaultState = new Map()

const PageMap = Record({
    comments: [],
    loading: true,
    loaded: false
})


export default (state = defaultState, action) => {

    const { type, payload, response } = action

    switch (type) {
        case LOAD_COMMENTS_PAGE + START: {
            const { page } = payload
            return state
                .set(page, new PageMap())
        }

        case LOAD_COMMENTS_PAGE + SUCCESS: {
            const { page } = payload
            return state
                .setIn([page, 'loading'], false)
                .setIn([page, 'loaded'], true)
                .setIn([page, 'comments'], response.records.map(({ id }) => id))
                .set('totalComments', response.total)
        }
    }

    return state
}