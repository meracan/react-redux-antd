import React from 'react';
import { Button } from 'antd';
import './style.less'
import {NAME,CLICK_BUTTON} from '../constants';

export const Props = [NAME,CLICK_BUTTON];
export default class MyButton extends React.PureComponent {
  render(){
    const {[NAME]:name,[CLICK_BUTTON]:clickButton}=this.props;
    return <Button type="primary" onClick={()=>clickButton()}>{"My name is "+ name}</Button>;
  }
}