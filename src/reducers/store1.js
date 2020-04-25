import { createReducer } from '@reduxjs/toolkit';


export default createReducer({
  name:"First",

}, {
  name: (state, { payload }) => {state.name = payload},
});
