import React from 'react';
import styled from 'styled-components';
//import styledMap from 'styled-map';

import theme from '../../themes/main-theme'

const DivCardHolder = styled.div`
  background: ${(theme.colors.cardBg)};
  padding:0;
  margin:0;
  position:relative;
`;

const DivCardInnerContent = styled.div`
  padding:8px;
`;

const STCard = ({children}) =>
  <DivCardHolder>
    <DivCardInnerContent>
      {children}
    </DivCardInnerContent>
  </DivCardHolder>

export default STCard;