import React from 'react';
import {Row, Col, } from 'react-grid-system';
import styled from 'styled-components';

const Brick = styled.div`
  padding: 20px 0;
`;

const Typography = () => (
  <Row>

    <Col xs={6}>
      <Brick>
        <h1>H1 / Loreim <b>Ipsum</b> 29/40</h1>
        <h2>H2 / Loreim <b>Ipsum</b> 24/32</h2>
        <h3>H3 / Loreim <b>Ipsum</b> 20/28</h3>
        <h4>H4 / Loreim <b>Ipsum</b> 17/24</h4>
        <h5>H5 / Loreim <b>Ipsum</b> 14/20</h5>
        <h6>H6 / Loreim <b>Ipsum</b> 12/16</h6>
      </Brick>
    </Col>
    <Col sm={6}>
      <Brick>
        Fonts
      </Brick>
    </Col>

    <Col xs={12} sm={6}>
      <Brick>
        <h6><b>Texto h6 - 12/16</b></h6>
        <p className="h6">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Brick>
    </Col>

    <Col xs={12} sm={6}>
      <Brick>
        <h5><b>Texto h5 - 14/20</b></h5>
        <p className="h5">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Brick>
    </Col>

    <Col xs={12} sm={6}>
      <Brick>
        <h4><b>Texto h4 - 17/24</b></h4>
        <p className="h4">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Brick>
    </Col>

    <Col xs={12} sm={6}>
      <Brick>
        <h3><b>Texto h3 - 20/28</b></h3>
        <p className="h3">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. </p>
      </Brick>
    </Col>

    <Col xs={12} sm={6}>
      <Brick>
        <h2><b>Texto h2 - 24/32</b></h2>
        <p className="h2">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat. </p>
      </Brick>
    </Col>

    <Col xs={12} sm={6}>
      <Brick>
        <h1><b>Texto h1 - 29/40</b></h1>
        <p className="h1">Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
      </Brick>
    </Col>

  </Row>
)

export default Typography;