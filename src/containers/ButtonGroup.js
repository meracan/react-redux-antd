import React from 'react';
import { connect } from 'react-redux';
import {mergeProps,getStoreProps,getDispatchProps} from '../utils';

import ButtonGroup from '../components/ButtonGroup.js';

import {STORE1,STORE2,NAME,NAME2,CLICK_BUTTON,CLICK_BUTTON2} from '../constants';

export const Props = [
  [STORE1,NAME,'name1'],
  [STORE2,NAME2,'name2']
  ];
  
export const Actions = [
  [CLICK_BUTTON,'clickButton1'],
  [CLICK_BUTTON2,'clickButton2'],
  ];

export default connect(
  store => getStoreProps(store,ButtonGroup,Props),
  dispatch => getDispatchProps(dispatch,ButtonGroup,Actions),
  mergeProps,
)(ButtonGroup);