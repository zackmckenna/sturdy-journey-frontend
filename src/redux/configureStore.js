import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

import noteReducer from './reducers/noteReducer'
import usersReducer from './reducers/usersReducer'
import roleReducer from './reducers/roleReducer'
import gameReducer from './reducers/gameReducer'
import sessionReducer from './reducers/sessionReducer'

function configureStore(initialState){
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
      applyMiddleware(thunk)
    )
)}

export default configureStore
