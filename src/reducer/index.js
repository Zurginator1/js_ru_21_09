import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRangeReduser from './dateRange'

export default combineReducers({
    counter: counterReducer,
    articles : articles,
    dateRange : dateRangeReduser
})