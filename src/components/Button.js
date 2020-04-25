import React from 'react';
import { Button } from 'antd';
import './style.less'

export const Props = ['name','clickButton'];
export default class MyButton extends React.PureComponent {
  render(){
    const {name,clickButton}=this.props;
    return <Button type="primary" onClick={()=>clickButton()}>{"My name is "+ name}</Button>  
  }
}