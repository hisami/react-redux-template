import * as React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Counter from './containers/Counter'

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path="/" component={Counter}/>
            </div>
        </BrowserRouter>
    )
}

export default App
