import { createStore, combineReducers } from 'redux';

// import reducers here
import goalReducer from 'reducers/goalReducer'
// combine reducers

const reducers = combineReducers({
	goalReducer
  
})

// crerate the store
export default createStore(reducers);