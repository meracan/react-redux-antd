import React from 'react';
import Button,{ Props as ButtonProps,Actions as ButtonActions } from './Button';
import {STORE1,NAME,TEAM,CLICK_BUTTON,CLICK_BUTTON2} from '../constants';

export const Props = [...ButtonProps,{store:STORE1,prop:TEAM}];
export const Actions = [...ButtonActions,CLICK_BUTTON2];
export default class GroupButton extends React.PureComponent{
  render(){
    
    const {[TEAM]:team,[CLICK_BUTTON2]:clickButton2}=this.props;
    return <div>
      <Button {...this.props}/>  
      <Button {...{[NAME]:team,[CLICK_BUTTON]:clickButton2}}/>
    </div>
  }
}
