import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonGroup extends React.PureComponent{
  static propTypes = {
    name1:PropTypes.string,
    name2: PropTypes.oneOf(['primary', 'default', 'dashed', 'dashed','text','link']),
    clickButton1: PropTypes.string.func,
    clickButton2: PropTypes.func,
  };  
  static defaultProps={
    name1:"a",
    name2:"primary",
    clickButton1:()=>null,
    clickButton2:()=>null
  };  
  render(){
    const {name1,name2,clickButton1,clickButton2}=this.props;
    return (
    <div>
      <Button name={name1} clickButton={clickButton1}/>  
      <Button name={name2} clickButton={clickButton2}/>  
    </div>
    );
  }
}
