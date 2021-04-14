import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import {FormattedMessage} from 'localization';

// Redux Connection
import { connect } from 'react-redux';
import {mergeProps,getStoreProps,getDispatchProps} from 'redux/connect.js';
import {STORE1,NAME,LASTNAME,CLICK1,CLICKLNG,CLICKTHEME} from 'redux/constants.js';


class MyButton extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string,
    lastname:PropTypes.string,
    clickButton: PropTypes.func,
    clickLng: PropTypes.func,
    clickTheme: PropTypes.func,
  };  
  static defaultProps={
    name:"first",
    lastname:"last",
    clickButton:()=>console.warn("MyButton was clicked"),
    clickLng:()=>console.warn("clickLng was clicked"),
    clickTheme:()=>console.warn("clickTheme was clicked")
  };
  render(){
    const {name,lastname,clickButton,clickLng,clickTheme}=this.props;
    
    return (
    <div>
      <Button type="primary" onClick={()=>clickButton()}>{"My name is "+ name + " " + lastname}</Button>
      <Button type="primary" onClick={()=>clickLng()}>{<FormattedMessage id={'name'}/>}</Button>
      <Button type="primary" onClick={()=>clickTheme()}>{<FormattedMessage id={'theme'}/>}</Button>
    </div>
  )
  }
}

export default connect(
  store => getStoreProps(store,MyButton,[[STORE1,NAME,'name'],[STORE1,LASTNAME,'lastname']]),
  dispatch => getDispatchProps(dispatch,MyButton,[[CLICK1,'clickButton'],[CLICKLNG,'clickLng'],[CLICKTHEME,'clickTheme']]),
  mergeProps,
)(MyButton);