import React from 'react';
import { Button } from 'antd';
import './style.less';


export default class MyButton extends React.PureComponent {
  static defaultProps={
    name:"a",
    clickButton:()=>console.warn("MyButton was clicked")
  };
  render(){
    const {name,clickButton}=this.props;
    
    return <Button type="primary" onClick={()=>clickButton()}>{"My name is "+ name}</Button>;
  }
}