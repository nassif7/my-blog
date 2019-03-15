import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import userReducer from './userReducer';



export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  user: userReducer
});