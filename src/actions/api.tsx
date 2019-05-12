import * as ActionTypes from '~/constants/actionTypes'

export const fetchApiRequest = () => ({
    type: ActionTypes.FETCH_API_REQUESTED
})

export const fetchApiSucceeded = (text) => ({
    type: ActionTypes.FETCH_API_SUCCEEDED,
    payload: {
        text: text
    }
})
