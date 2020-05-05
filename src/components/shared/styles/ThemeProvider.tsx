import React from 'react';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';
import { ProvideThemeContext, useThemeContext } from './ThemeChanger';

interface IProps {
  theme: 'light' | 'dark';
  children: React.ReactElement
}

const ThemeProviderComponents: React.FC<any> = ({ children }) => {
  const { theme } = useThemeContext();
  console.log(theme);
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

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  return (
    <ProvideThemeContext>
        <ThemeProviderComponents>
          {children}
       </ThemeProviderComponents>
    </ProvideThemeContext>
  );
}

export default ThemeProvider;
