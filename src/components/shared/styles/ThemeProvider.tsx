import React from 'react';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';

interface IProps {
  theme: 'light' | 'dark';
  children: React.ReactElement
}

const ThemeProvider: React.FC<IProps> = ({ theme, children }) => {
  if (theme === 'light') {
    require('antd/dist/antd.css');
  } else {
    require('antd/dist/antd.dark.css');
  }
  return (
    <ThemeProviderStyledComponents theme={theme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProviderStyledComponents>
  );
}

export default ThemeProvider;
