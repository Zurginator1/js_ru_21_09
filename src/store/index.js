import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generateId from '../middlewares/generateId'

const enchancer = applyMiddleware(logger, generateId)

const store = createStore(reducer, enchancer)

//dev only
window.store = store

export default store