import React from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from 'style/global';

// Redux Connection
import { connect } from 'react-redux';
import {mergeProps,getStoreProps,getDispatchProps} from 'redux/connect.js';
import {STORE1,THEME} from 'redux/constants.js';


class MyThemeProvider extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object,
  };  
  static defaultProps={
    theme:{},
  };
  render(){
    return (
    <ThemeProvider theme={this.props.theme}>
        <GlobalStyle/>
        {this.props.children}
    </ThemeProvider>
    )
  }
}

export default connect(
  store => getStoreProps(store,MyThemeProvider,[[STORE1,THEME,'theme']]),
  dispatch => getDispatchProps(dispatch,MyThemeProvider,[]),
  mergeProps,
)(MyThemeProvider);