import * as React from 'react'

const Api = (props) => {
    return(
        <div>
            <h1>API</h1>
            <button onClick={() => props.dispatchFetchApiRequest()}>Fetch</button>
            <div>{props.api.response.text}</div>
        </div>
    );
}

export default Api
