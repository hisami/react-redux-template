import {connect} from 'react-redux'
import * as React from 'react'

import Api from '../components/Api'
import {fetchApiRequest} from '../actions/api'
import {Dispatch} from 'redux'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        dispatchFetchApiRequest: () => {
            dispatch(fetchApiRequest())
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Api)
