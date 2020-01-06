import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/app.css'
import configureStore from './redux/configureStore'

const store = configureStore()

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Root store={store} />, rootElement)
