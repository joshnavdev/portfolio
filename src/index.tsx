import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import './index.scss';
import ThemeProvider from './providers/theme.provider';
import { Flowbite } from 'flowbite-react';
import { theme } from './flowbite.theme';
import { GlobalStyle } from './styles';

console.log(process.env.PUBLIC_URL);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Flowbite theme={{ theme }}>
        <GlobalStyle />
        <Home />
      </Flowbite>
    </ThemeProvider>
  </React.StrictMode>
);
