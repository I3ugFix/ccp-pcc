import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import { normalize, fontFace/*, fontFilePath*/ } from 'polished';
import { Container, Row, Col, ScreenClassRender } from 'react-grid-system';

// Theme
import theme from '../../themes/main-theme';
//import theme from '../../themes/dark-theme';


//Components
import ButtonsDemo from '../demos/ButtonsDemo';
import Typography from '../demos/Typography';
import GridExam from '../grid/react-grid-system';
import Icon from '../icons/icon';

injectGlobal`${normalize()}`;

injectGlobal`${
  fontFace({
    'fontFamily':   'Sans',
    'fontFilePath': '/fonts/OpenSans-Regular',
    fileFormats:    ['ttf']
  })}
`;

injectGlobal`${
  fontFace({
    'fontFamily':   'SansBold',
    'fontFilePath': '/fonts/OpenSans-Bold',
    fileFormats:    ['ttf']
  })}
  body {
    font-family: 'Sans';
    background:  ${theme.colors.bodyBg};
    color:       ${theme.colors.textColor};
    font-size:14px;
    b, strong {
      font-family: 'SansBold';
    }
  }

  h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6, p {
    margin:  0;
    padding: 0;
    display: block;
  }

  h1,.h1 {
    font-size:   29px;
    line-height: 40px;
  }

  h2,.h2 {
    font-size:   24px;
    line-height: 32px;
  }

  h3,.h3 {
    font-size:   20px;
    line-height: 28px;
  }

  h4,.h4 {
    font-size:   17px;
    line-height: 24px;
  }

  h5,.h5 {
    font-size:   14px;
    line-height: 20px;
  }

  h6,.h6{
    font-size:   12px;
    line-height: 19px;
  }

`;

const SMALL_SCREEN_SIZES = ['sm', 'xs'];

const containerProps = {
  style: {
    padding: '0px',
  },
};

const getScreenWidth = (screenClass, props) =>
  SMALL_SCREEN_SIZES.includes(screenClass)
    ? ({
      ...containerProps.style,
      padding: '10px',
    })
    : containerProps.style;

const App = () => (
  <ThemeProvider theme={theme}>
    <ScreenClassRender style={getScreenWidth}>
      <Container>
        {/* <GridExam/> */}
        <Typography/>
        <ButtonsDemo/>
        <Icon name="home" />
      </Container>

    </ScreenClassRender>
  </ThemeProvider>
);

export default App;