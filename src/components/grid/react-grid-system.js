import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';

const Brick = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  background: #ccc; 
`;
const BrickAside = styled.div`
  height: 100%;
  position: realtive;
  background: #c3c3c3;
`;

const rowProps = {
  style: {
    margin: '0 -7px 0 -7px',
  },
};

const GridExam = () => (
  // <Row nogutter {...rowProps}>
  <Row>
    <Col lg={3}>
    <BrickAside>
      Columna<b>Aside</b>
    </BrickAside> 
    </Col>

    <Col lg={9}>
      <Row nogutter>
        {
          [...Array(8)].map((_obj, idx) => (
            <Col xs={6} sm={4} md={4} lg={3} >
              <Brick>
                Columna<b>Grid</b>
              </Brick>
            </Col>
          ))
        }
      </Row>
    </Col>

  </Row>

);

export default GridExam;