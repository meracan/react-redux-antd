import React from 'react';
import { connect } from 'react-redux';
import {mergeProps,getStoreProps,getDispatchProps} from '../utils';

import Button,{Props,Actions} from '../components/Button.js';

export default connect(
  store => getStoreProps(store,new Set([...Props])),
  dispatch => getDispatchProps(dispatch,new Set([...Actions])),
  mergeProps,
)(Button);