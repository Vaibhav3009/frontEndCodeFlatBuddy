
import { combineReducers } from 'redux';
import hobbiesAndHabitsReducer from './hobbiesAndHabitsReducer';
import ResultReducer from './ResultReducer';
import UserReducer from './UserReducer';
import loggedUser from './LoggedIn';
export default combineReducers({
  'hobbiesAndHabits':hobbiesAndHabitsReducer,
  'user':UserReducer,
  'results':ResultReducer,
  'login':loggedUser,
});