import { ReactNode } from 'react';

interface IconButtonWrapperProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const IconButtonWrapper: React.FC<IconButtonWrapperProps> = ({ children, ...props }) => {
  return (
    <button
      className="flex items-center px-2 rounded-lg cursor-pointer hover:bg-nord-5 focus:ring-2 focus:outline-none focus:ring-nord-5 dark:focus:ring-nord-3 dark:hover:bg-nord-3"
      {...props}>
      {children}
    </button>
  );
};

export default IconButtonWrapper;
