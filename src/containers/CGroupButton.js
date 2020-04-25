import React from 'react';
import { connect } from 'react-redux';
import {mergeProps,getStoreProps,getDispatchProps} from '../utils';

import GroupButton,{Props,Actions} from '../components/GroupButton.js';

@connect(
store => getStoreProps(store,new Set([...Props])),
dispatch => getDispatchProps(dispatch,new Set([...Actions])),
mergeProps
)
export default class C extends React.PureComponent {
    render() {
        return (<GroupButton {...this.props}/>);
    }
}