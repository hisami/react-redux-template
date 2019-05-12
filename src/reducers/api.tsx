import * as ActionTypes from '../constants/actionTypes'

const initialState = {
    response: {
        text: '',
    }
}

export default function api(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_API_SUCCEEDED:
            return {response: {text: action.payload.text}}
        default:
            return state
    }
}
