import { createContext } from 'react';
import { Theme } from '../componets/ThemeToggle/themes';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>(null!);

export default ThemeContext;
