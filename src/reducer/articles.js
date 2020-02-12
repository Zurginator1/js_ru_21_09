import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { ADD_ID_TO_ARTICLES } from '../constants'

const articlesMap = normalizedArticles.reduce((acc, article) => {
    return { ...acc, [article.id]: article }
}, {})

export default (articleState = articlesMap, action) => {
    const { type, payload } = action
    switch (type) {
        case DELETE_ARTICLE:
            return articleState.filter(article => article.id !== payload.id)
            break;
        case ADD_ID_TO_ARTICLES:
            const { articleId, commentId } = payload
            const article = articleState[articleId]
            const { comments } = article
            return { ...articleState, [articleId]: { ...article, comments: [...comments, commentId] } }
    }
    return articleState
}