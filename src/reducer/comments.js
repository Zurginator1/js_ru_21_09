import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const commentsMap = normalizedComments.reduce((acc, article) => {
    return { ...acc, [article.id]: article }
}, {})

export default (commentsState = commentsMap, action) => {
    const { type, payload} = action

    switch (type) {
        case ADD_COMMENT:
            const { id, user, text } = payload
            commentsState[payload.id] = {
                id,
                user,
                text
            }
            break
    }

    return commentsState
}