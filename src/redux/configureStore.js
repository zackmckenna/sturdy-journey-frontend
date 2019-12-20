import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import io from 'socket.io-client'


import socketIOEmitterMiddleware from 'socket.io-emitter-middleware'
import socketIOSubscriberMiddleware from 'socket.io-subscriber-middleware';

import noteReducer from './reducers/noteReducer'
import usersReducer from './reducers/usersReducer'
import roleReducer from './reducers/roleReducer'
import gameReducer from './reducers/gameReducer'
import sessionReducer from './reducers/sessionReducer'

function configureStore(initialState){

  const socket = io.connect('http://localhost:30725/')
  const reducers = combineReducers({
    notes: noteReducer,
    users: usersReducer,
    roles: roleReducer,
    games: gameReducer,
    // loginForm: loginFormReducer,
    session: sessionReducer,
    form: formReducer,
    loginForm: formReducer
  })

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        socketIOEmitterMiddleware(socket),
        socketIOSubscriberMiddleware(socket))
    )
)}

export default configureStore
