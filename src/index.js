import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/app.css'
import configureStore from './redux/configureStore'

const store = configureStore();

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter store={store}>
      <App store={store}/>
    </BrowserRouter>
  </Provider>, rootElement)
