import React, { useState, useCallback } from 'react'
import { Select } from 'antd';

const ThemeContextContext = React.createContext({ theme: 'light', setCurrentTheme: (t: 'light' | 'dark') => t });

export function ProvideThemeContext({ children }: any) {
  const themeContext = useProvideThemeContext();
  return <ThemeContextContext.Provider value={themeContext}>{children}</ThemeContextContext.Provider>;
}

export const useThemeContext = () => {
  return React.useContext(ThemeContextContext);
};


function useProvideThemeContext() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const setCurrentTheme = useCallback((t: "light" | "dark") => { setTheme(t); return t; }, []);
  return { theme, setCurrentTheme };
}
const { Option } = Select;

const ThemeChanger = () => {
  const { setCurrentTheme } = useThemeContext();
  return (
      <Select defaultValue="light" style={{ width: 120 }} onChange={setCurrentTheme}>
        <Option value="light">Light</Option>
        <Option value="dark">Dark</Option>
      </Select>
  );
}

export default ThemeChanger;
