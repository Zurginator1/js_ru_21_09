import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'
import { withNamespaces, useTranslation } from 'react-i18next'

class Counter extends Component {
    static propTypes = {

    };

    static contextTypes = {
        language: PropTypes.object
    }

    render() {
        const { t } = useTranslation()

        const { counter } = this.context.language
        return (
            <div>
                <span>{t('by')}</span>
                <h3>{counter.count}: {this.props.count} <button onClick = {this.handleIncrement}>{counter.increment}</button></h3>
            </div>
        )
    }

    handleIncrement = () => {
        const action = increment()
        this.props.dispatch(action)
    }
}

const mapStateToProps = (state) => ({
    count: state.counter
})

export default withNamespaces()(connect(mapStateToProps)(Counter))