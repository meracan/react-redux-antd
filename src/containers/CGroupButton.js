import React from 'react';
import { connect } from 'react-redux';
import {mergeProps,getStoreProps,getDispatchProps} from '../utils'

import GroupButton,{Props} from '../components/GroupButton.js';

const props=new Set([...Props]);

@connect(
store => getStoreProps(store,[{storeID:'store1',props}]),
dispatch => getDispatchProps(dispatch,Props),
mergeProps
)
export default class C extends React.PureComponent {
    render() {
        return (<GroupButton {...this.props}/>)
    }
}