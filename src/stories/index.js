import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

import { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../themes/main-theme/';

import STButton from '../components/buttons/Button';
import ButtonDemo from '../components/demos/ButtonsDemo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
 

storiesOf('Button', module)
  .add('All Btns', () =>
    <ThemeProvider theme={theme}>
      <ButtonDemo/>
    </ThemeProvider>
  )
  .add('Primary', () =><STButton>Hello Button</STButton>)
  .add('Primary Small', () =><STButton sm>Primary small</STButton>)
  .add('Primary Large', () =><STButton lg>Primary large</STButton>)

  .add('with some emoji', () => (
    <STButton onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </STButton>
  ));
