import { createContext } from 'react';

interface ThemeContextType {
  theme: string | null;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>(null!);

export default ThemeContext;
