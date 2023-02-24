import { ReactNode, useState } from 'react';
import ThemeContext from '../contexts/theme.context';

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    const newValue = theme === 'dark' ? 'light' : 'dark';

    setTheme(newValue);
  };

  const value = {
    theme: theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
