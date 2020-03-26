import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import history from '../history'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <I18nextProvider i18n={i18n}>
                <Provider store={this.props.store}>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </Provider>
            </I18nextProvider>
        )
    }
}

export default Root