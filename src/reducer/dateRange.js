import {DATE_RANGE} from '../constants'
import { DateUtils } from 'react-day-picker'

export default function dateRangeReduser(state = {from: null, to: null}, action) {
    return action.type === DATE_RANGE ? DateUtils.addDayToRange(action.payload.day, state) : state
}
