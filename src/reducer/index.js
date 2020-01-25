import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRangeReduser from './dateRange'
import selectArticles from './selectArticles'

export default combineReducers({
    counter: counterReducer,
    articles: articles,
    dateRange: dateRangeReduser,
    selectedArticles: selectArticles
})