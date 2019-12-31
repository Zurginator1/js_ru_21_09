import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import store from './store'
import { Provider as StoreProvider } from 'react-redux'

render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>,
    document.getElementById('container')
)