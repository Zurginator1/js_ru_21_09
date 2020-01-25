import { SELECT_ARTICLE } from '../constants'

export default function selectArticles(state = [], action) {
    return action.type === SELECT_ARTICLE ? action.payload.selected : state
}