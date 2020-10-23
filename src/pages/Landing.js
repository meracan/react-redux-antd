import React from 'react';
import {  Layout } from 'antd';

import Button from '../containers/Button.js';

const {  Content } = Layout;

export default class Landing extends React.PureComponent {
  static defaultProps={

  };
  render(){
    
    return (
        <Content>
            <Button />
        </Content>
        );
  }
}