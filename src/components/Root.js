import React from 'react'
import { Provider } from 'react-redux'
import App from '../App'
import { Router, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter store={store}>
      <App store={store}/>
    </BrowserRouter>
  </Provider>
)

export default Root
