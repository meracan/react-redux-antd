import { createReducer } from '@reduxjs/toolkit';
import {NAME2,TEAM2} from '../constants';

export default createReducer({
  [NAME2]:"First",
  [TEAM2]:"MyTeam",

}, {
  [NAME2]: (state, { payload }) => {state[NAME2] = payload},
  [TEAM2]: (state, { payload }) => {state[TEAM2] = payload},
});
