import { INCREMENT } from "../constants"

export default (state = { value: 0 }, action) => {
    const { type } = action
    switch (type) {
        case INCREMENT:
            return { value: state.value + 1 }
    }
    return state
}