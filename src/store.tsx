import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducer from './reducer'


const configureStore = () => {
    const store = createStore(reducer)
    return store
}

export default configureStore
