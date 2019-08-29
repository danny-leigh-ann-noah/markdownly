import { combineReducers } from 'redux';
import markdownReducer from './markdownReducer';
import markdownListReducer from './markdownListReducer';

export default combineReducers({
  markdownReducer,
  markdownListReducer
});
