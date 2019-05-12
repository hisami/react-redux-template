import * as React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Counter from './containers/Counter'
import Api from './containers/Api'

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Counter}/>
                <Route path="/api" component={Api} />
            </div>
        </BrowserRouter>
    )
}

export default App
