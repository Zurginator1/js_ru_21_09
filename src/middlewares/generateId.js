import { ADD_COMMENT } from "../constants";
import uuid from 'uuid/v4'
import {addIdToArticles} from '../AC'

//const possible = 'abcdefghijklmnopqrstuvwxyz';

export default store => next => action => {

    if (action.type === ADD_COMMENT) {
        action.payload.id = uuid()
        store.dispatch(addIdToArticles(action.payload.articleId, action.payload.id))
        //action.payload.id = Array.apply(null, Array(10)).map(() => possible[Math.floor(Math.random() * possible.length)]).join('')
    }

    next(action)

}
