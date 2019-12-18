import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import noteReducer from './reducers/noteReducer'
import userReducer from './reducers/userReducer'
import roleReducer from './reducers/roleReducer'
import gameReducer from './reducers/gameReducer'
import sessionReducer from './reducers/sessionReducer'

const reducer = combineReducers({
  notes: noteReducer,
  users: userReducer,
  roles: roleReducer,
  games: gameReducer,
  session: sessionReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
