import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-family: ${props => props.theme.fontFamily};
    background:${props => props.theme.background};
  }
`;