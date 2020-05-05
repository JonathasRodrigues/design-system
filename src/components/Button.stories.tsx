import * as React from 'react';
import Button from './Button';
import ThemeChanger from './shared/styles/ThemeChanger';

export const Type = () => {
  return (
    <Button>Normal Button</Button>
  )
};

export const Theme = () => <ThemeChanger />

export default {
  title: 'Design System/Button',
  component: Button
};



