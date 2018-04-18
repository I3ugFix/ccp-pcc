import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize, fontFace/*, fontFilePath*/ } from 'polished';

// Theme
import theme from '../../themes/main-theme';
//import theme from '../../themes/dark-theme';


//Components
import ButtonsDemo from '../demos/ButtonsDemo';
import Icon from '../icons/icon'

injectGlobal`${normalize()}`;
injectGlobal`${
  fontFace({
    'fontFamily': 'Open Sans',
    'fontFilePath': '/fonts/OpenSans-Regular',
    fileFormats: ['ttf']
  }
  )}
  body {
      font-family: 'Open Sans';
      background: ${theme.colors.bodyBg};
      color: ${theme.colors.textColor};
    }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <ButtonsDemo/>
      <Icon name="home" />
    </div>
  </ThemeProvider>
);

export default App;