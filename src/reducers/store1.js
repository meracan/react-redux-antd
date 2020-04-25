import { createReducer } from '@reduxjs/toolkit';
import {NAME,TEAM} from '../constants';

export default createReducer({
  [NAME]:"First",
  [TEAM]:"MyTeam",

}, {
  [NAME]: (state, { payload }) => {state[NAME] = payload},
  [TEAM]: (state, { payload }) => {state[TEAM] = payload},
});
