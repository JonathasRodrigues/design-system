import * as React from 'react';
import Button from './Button';
import ThemeProvider from './shared/styles/ThemeProvider';
import { Space } from 'antd';

export default {
  title: 'Design System/Button'
};

export const Types = () => {
  return (
    <Space>
    <ThemeProvider theme={'orbita'}>
      <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="primary" disabled>Disabled</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
      <Button type='primary' shape='circle'>B</Button>
      <Button type='default' shape='circle'>B</Button>
      </Space>
    </ThemeProvider>
    <ThemeProvider theme={'nutror'}>
      <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="primary" disabled>Disabled</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
      <Button type='primary' shape='circle'>B</Button>
      <Button type='default' shape='circle'>B</Button>
      </Space>
    </ThemeProvider>
    </Space>
  )
};




