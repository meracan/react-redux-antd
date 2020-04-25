import React from 'react';
import Button,{ Props as ButtonProps } from './Button';


export const Props = [...ButtonProps];
export default class GroupButton extends React.PureComponent{
  render(){
    return <Button {...this.props}/>  
  }
}
