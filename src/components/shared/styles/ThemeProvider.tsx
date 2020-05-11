import React from 'react';
import orbita from './orbita';
import nutror from './nutror';
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components';
import 'antd/dist/antd.css';

interface IProps {
  theme: 'orbita' | 'nutror';
  children: React.ReactElement
}

const ThemeProvider: React.FC<IProps> = ({ theme, children }) => {
  return (
    <ThemeProviderStyledComponents theme={theme === 'orbita' ? orbita : nutror}>
      {children}
    </ThemeProviderStyledComponents>
  );
}

export default ThemeProvider;
