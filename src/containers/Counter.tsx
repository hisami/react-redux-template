import {connect} from 'react-redux'
import * as React from 'react'

import Counter from '../components/Counter'
import {increment, decrement} from '../actions/counter'
import {Dispatch} from 'redux'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchIncrement: () => {
            dispatch(increment())
        },
        dispatchDecrement: () => {
            dispatch(decrement())
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
