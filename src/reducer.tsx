import {combineReducers} from 'redux'
import counter from './reducers/counter'
import api from './reducers/api'

const reducer = combineReducers({
    counter,
    api
})

export default reducer
