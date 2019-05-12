import * as React from 'react'

type Props = {
    counter: {
        count: number
    }
    dispatchIncrement: () => any
    dispatchDecrement: () => any
}

const Counter: React.FC<Props> = (props) => {
    return(
        <div>
            <h1>Counter</h1>
            <span>{props.counter.count}</span>
            <button onClick={() => props.dispatchIncrement()}>+</button>
            <button onClick={() => props.dispatchDecrement()}>-</button>
        </div>
    )
}

export default Counter
