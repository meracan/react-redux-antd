import React from 'react';
import { Button } from 'antd';
import './style.less';
import {STORE1,NAME,CLICK_BUTTON} from '../constants';

export const Props = [{store:STORE1,prop:NAME}];
export const Actions = [CLICK_BUTTON];

export default class MyButton extends React.PureComponent {
  render(){
    const {[NAME]:name,[CLICK_BUTTON]:clickButton}=this.props;
    return <Button type="primary" onClick={()=>clickButton()}>{"My name is "+ name}</Button>;
  }
}