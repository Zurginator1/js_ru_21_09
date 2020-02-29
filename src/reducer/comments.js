import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'
import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

export default (state = arrToMap([], CommentRecord), action) => {
    const { type, payload, randomId, response } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, new CommentRecord({
                ...payload.comment,
                id: randomId
            }))

        case LOAD_COMMENTS + SUCCESS:
            console.log('Comments is loaded')
            return arrToMap(response, CommentRecord)
    }

    return state
}