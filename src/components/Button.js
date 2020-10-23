import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './style.less';


export default class MyButton extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    lastname:PropTypes.string,
    clickButton: PropTypes.func,
  };  
  static defaultProps={
    name:"fisrt",
    lastname:"last",
    clickButton:()=>console.warn("MyButton was clicked")
  };
  render(){
    const {name,lastname,clickButton}=this.props;
    
    return <Button type="primary" onClick={()=>clickButton()}>{"My name is "+ name + " " + lastname}</Button>;
  }
}