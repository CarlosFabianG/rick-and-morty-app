import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import theme from './theme'
import Router from './Router'
import './index.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import * as serviceWorker from './serviceWorker'

const initialState = {
      recentCharacters: [],
      recentEpisodes: []
}

const store = createStore(reducers, initialState)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <CSSReset />
        <Router />
    </ThemeProvider>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
