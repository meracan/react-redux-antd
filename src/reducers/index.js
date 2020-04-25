import { combineReducers } from 'redux';
import store1 from './store1';
import store2 from './store2';
import {STORE1,STORE2} from '../constants.js';
export default combineReducers({
  [STORE1]:store1,
  [STORE2]:store2,
});
