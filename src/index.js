import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'twin.macro'
import { Provider } from 'jotai'
import App from './App'

import './assets/css/tailwind.css'

ReactDOM.render(
  <Provider>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root'),
)
