import React from 'react';
import styled from 'styled-components';

import STCard from '../card/card.js';
import STButton from '../buttons/Button';
import STPreloader from '../preloader/preloader';

// Only for this components
const BtnGroup = styled.div`
  //display: flex;
`;


const ButtonsDemo = () => (
  <STCard>

    <BtnGroup>
      <STButton className="some-class-name" id="some-id">Primary</STButton>
      <STButton preloader>
        <STPreloader color='light'/>
        Primary 
      </STButton>
      <STButton disabled>Primary Disabled</STButton>
      <STButton sm>Primary small</STButton>
      <STButton lg>Primary large</STButton>
      <STButton lg lg_preloader>
         <STPreloader color='light'/>
         Preloader
      </STButton>
    </BtnGroup>

    <BtnGroup>
      <STButton secondary>Secondary</STButton>
      <STButton secondary preloader>
        <STPreloader color='dark'/>
        Preloader
      </STButton>
      <STButton secondary disabled>Secondary Disabled</STButton>
      <STButton secondary sm>Secondary small</STButton>
      <STButton secondary lg>Secondary large</STButton>
      <STButton secondary lg lg_preloader>
        <STPreloader color='dark'/>
        Preloader
      </STButton>
    </BtnGroup>

    <BtnGroup>
      <STButton outline>Outline</STButton>
      <STButton outline preloader><STPreloader />Primary Outline</STButton>
      <STButton outline disabled>Primary Outline desabled</STButton>
      <STButton outline sm>Outline small</STButton>
      <STButton outline lg>Outline large</STButton>
      <STButton outline lg lg_preloader>
        <STPreloader />
        Preloader
      </STButton> 
    </BtnGroup>

    <BtnGroup>
      <STButton ghost>Ghost</STButton>
      <STButton ghost preloader><STPreloader />Preloader</STButton>
      <STButton ghost disabled>GhostBtn desabled</STButton>
      <STButton ghost sm>GhostBtn small</STButton>
      <STButton ghost lg>GhostBtn large</STButton>
      <STButton ghost lg lg_preloader><STPreloader />Preloader</STButton>
    </BtnGroup>

    <BtnGroup>
      <STButton ghost_secondary>Ghost secondary</STButton>
      <STButton ghost_secondary preloader><STPreloader color='dark'/>Preloader</STButton>
      <STButton ghost_secondary disabled>Ghost secondary desabled</STButton>
      <STButton ghost_secondary sm>Ghost secondary small</STButton>
      <STButton ghost_secondary lg>Ghost secondary large</STButton>
      <STButton ghost_secondary lg lg_preloader><STPreloader color='dark'/>Preloader</STButton>
    </BtnGroup>

  </STCard>
);

export default ButtonsDemo;