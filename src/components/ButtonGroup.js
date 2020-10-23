import React from 'react';
import Button from './Button';

export default class ButtonGroup extends React.PureComponent{
  static defaultProps={
    name1:"a",
    name2:"a",
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
