import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action
    if (!callAPI) return next(action)
    next({
        type: type + START,
        ...rest
    })

    //dev only
    setTimeout(() => fetch(callAPI)
        .then(res => {
            return res.json()
        })
        .then(response => {
            return next({...rest, type: type + SUCCESS, response})
        })
        .catch(error => next({...rest, type: type + FAIL, error}))
    , 1000)
}