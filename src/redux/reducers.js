import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { intlReducer } from 'react-intl-redux'

import {STORE1,STORE2} from './constants';
import {THEMEID,THEME,NAME,LASTNAME,A,B} from './constants';
import themes from 'style/theme';


const store1=createReducer({}, {
  [THEMEID]: (state, { payload }) => {
    state[THEMEID] = payload;
    if(!themes[payload])console.warn(`Theme "${payload}" does not exist. "default" theme is used`);
    state[THEME] = themes[payload]||themes['default'];
  },
  [NAME]: (state, { payload }) => {state[NAME] = payload},
  [LASTNAME]:  (state, { payload }) => {state[LASTNAME] = payload},
});

const store2=createReducer({}, {
  [A]: (state, { payload }) => {state[A] = payload},
  [B]: (state, { payload }) => {state[B] = payload},
})




export default combineReducers({
  [STORE1]:store1,
  [STORE2]:store2,
  intl: intlReducer,
});


