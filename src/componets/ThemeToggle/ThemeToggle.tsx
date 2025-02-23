import { Dropdown } from 'flowbite-react';
import React from 'react';
import useTheme from '../../hooks/theme.hook';
import themes from './themes';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const dropdownLabel = (
    <div className="flex gap-2">
      <svg className="w-5 h-5" viewBox="0 0 512 512" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(256 256)" transform-origin="128 0">
          <g transform="translate(0,0) scale(1,1)">
            <path
              d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
              fill="currentColor"
              transform="translate(-256 -256)"></path>
          </g>
        </g>
      </svg>
      <span>{theme.label}</span>
    </div>
  );

  return (
    <Dropdown label={dropdownLabel} color="light" arrowIcon={false}>
      {themes.map((t) => (
        <Dropdown.Item key={t.id} onClick={() => toggleTheme(t)}>
          {t.label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default ThemeToggle;
