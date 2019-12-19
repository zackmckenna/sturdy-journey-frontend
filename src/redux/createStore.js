import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createForms } from 'react-redux-form'

import noteReducer from './reducers/noteReducer'
import usersReducer from './reducers/usersReducer'
import roleReducer from './reducers/roleReducer'
import gameReducer from './reducers/gameReducer'
import sessionReducer from './reducers/sessionReducer'
// import loginFormReducer from './reducers/loginFormReducer'

const initialUserState = {
  username: '',
  password: ''
}

const reducer = combineReducers({
  notes: noteReducer,
  users: usersReducer,
  roles: roleReducer,
  games: gameReducer,
  // loginForm: loginFormReducer,
  session: sessionReducer,
  ...createForms({
    user: initialUserState
  })
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
