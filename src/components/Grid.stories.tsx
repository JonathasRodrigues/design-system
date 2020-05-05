import * as React from 'react';
import { Row, Col, Divider } from 'antd';

import styled from 'styled-components';

const Item = styled.div`
  background: #0092ff;
  padding: 8px;
  text-align: center;
`;

export const Basic = () => (
  <>
  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
    Horizontal
  </Divider>
  <Row gutter={16}>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
  </Row>
  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
    Responsive
  </Divider>
  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
  </Row>
  <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
    Vertical
  </Divider>
  <Row gutter={[16, 24]}>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
    <Col className="gutter-row" span={6}>
      <Item>col-6</Item>
    </Col>
  </Row>
</>
);

export default {
  title: 'Design System/Grid',
  component: Row
};

