import React from 'react';
import { connect } from 'react-redux';
import {mergeProps,getStoreProps,getDispatchProps} from '../utils';

import {Button} from '../components';

import {STORE1,NAME,CLICK_BUTTON} from '../constants';

export const Props = [
  [STORE1,NAME,'name']
  ];
  
export const Actions = [
  [CLICK_BUTTON,'clickButton'],
  ];

export default connect(
  store => getStoreProps(store,Button,Props),
  dispatch => getDispatchProps(dispatch,Button,Actions),
  mergeProps,
)(Button);