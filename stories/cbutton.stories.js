import React from 'react';
import CButton from 'components/CButton';
import Provider from 'redux/provider.js'

export default {
  title: 'Components/CButton',
  component: CButton,
};

const Template = (args) => <Provider><CButton {...args} /></Provider>;

export const Primary = Template.bind({});
Primary.args = {
  
};