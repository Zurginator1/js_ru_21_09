import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { increment } from '../AC/counter'

class Counter extends Component {

    render() {
        const { count } = this.props

        return (
            <div>
                <b>{count}</b>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }

    handleClick = () => {
        const { increment } = this.props
        increment()
    }
}

export default connect((state) => {
    return { count: state.counter.value }
}, dispatch => {
    return {
        increment: () => dispatch(increment())
    }
})(Counter)