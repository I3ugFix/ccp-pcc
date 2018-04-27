import React from 'react';
import styled, { keyframes }  from 'styled-components';
//import styledMap from 'styled-map';
import { darken,  setLightness, opacify } from 'polished';

import theme from '../../themes/main-theme'

const PreloaderRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpanPreloaderWrapper = styled.span`
    position: absolute ;
    top: 24% ;
    left: -2% ;
`;

const SpanPreloaderSpinner = styled.span`
  position: absolute;
  margin: 0 16px;
  z-index: 1;
  border:  2px solid  ${
    (props) => {
      switch(props.color) {
        case 'dark': return props.theme.colors.textColor;
        case 'light': return props.theme.colors.cardBg;
        default: return setLightness(0.65,  props.theme.colors.primary);
      }
    }
  };
  border-radius: 50%;
  border-top: 2px solid #00000000;
  width: 16px;
  height: 16px;
  animation: ${PreloaderRotate} 1.5s linear infinite;
`;

const STPreloader = props => (
  <SpanPreloaderWrapper>
    <SpanPreloaderSpinner color={props.color}></SpanPreloaderSpinner>
  </SpanPreloaderWrapper>
);

export default STPreloader;