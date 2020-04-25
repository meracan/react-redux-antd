import { createReducer } from '@reduxjs/toolkit';
import {NAME,CLICK_BUTTON} from '../constants';

export default createReducer({
  [NAME]:"First",

}, {
  [NAME]: (state, { payload }) => {state[NAME] = payload},
});
