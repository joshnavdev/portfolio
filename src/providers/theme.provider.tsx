import { ReactNode, useState } from 'react';
import themes, { Theme } from '../componets/ThemeToggle/themes';
import ThemeContext from '../contexts/theme.context';

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currentThemeId = localStorage.getItem('current-theme');
  let currentTheme = themes.find((t) => t.id === currentThemeId);

  if (!currentTheme) {
    currentTheme = themes[0];
  }

  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggleTheme = (t: Theme) => {
    localStorage.setItem('current-theme', t.id);
    setTheme(t);
  };

  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
