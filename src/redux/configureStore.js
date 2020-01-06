import { createStore, combineReducers, applyMiddleware  } from 'redux'

// middleware imports
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import io from 'socket.io-client'
import socketIOEmitterMiddleware from 'socket.io-emitter-middleware'
import socketIOSubscriberMiddleware from 'socket.io-subscriber-middleware';

// reducers
import noteReducer from './reducers/noteReducer'
import usersReducer from './reducers/usersReducer'
import roleReducer from './reducers/roleReducer'
import gameReducer from './reducers/gameReducer'
import toggleReducer from './reducers/toggleReducer'
import sessionReducer from './reducers/sessionReducer'

import { loadState, saveState } from './localState'
import throttle from 'lodash/throttle'


const configureStore = () => {

  const persistedState = loadState()
  const socket = io.connect('http://localhost:30725/')
  const reducers = combineReducers({
    notes: noteReducer,
    users: usersReducer,
    roles: roleReducer,
    games: gameReducer,
    // loginForm: loginFormReducer,
    toggles: toggleReducer,
    session: sessionReducer,
    form: formReducer,
    loginForm: formReducer
  })

  const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger,
        socketIOEmitterMiddleware(socket),
        socketIOSubscriberMiddleware(socket))
    )
  )
  store.subscribe(throttle(() => {
    saveState({
      localUser: store.getState().session.localUser
    })
  }, 1000))

  return store
}


export default configureStore
