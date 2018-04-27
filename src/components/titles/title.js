import React from 'react';
import styled, { keyframes }  from 'styled-components';

const TitleHolder = styled.h1`
  display: block
`;

//const TitleBody = type =>`<h${type}></h${type}>`

const STTitle = (props) => (
   <TitleHolder type={props.type}></TitleHolder>
)

export default STTitle;


//<STTitle type={h1} as={h2}/>