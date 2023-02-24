import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';

interface INavbarLinkProps {
  title: string;
  href: string;
  scroll?: boolean;
}

const NavbarLink: React.FC<INavbarLinkProps> = ({ title, href, scroll = false }) => {
  const [anchorRef, setAnchorRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorRef(document.getElementById(href));
  }, [href]);

  const handleAnchorClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    anchorRef?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!scroll) {
    return <Navbar.Link href={href}>{title}</Navbar.Link>;
  }

  return (
    <Navbar.Link href={`#${href}`} onClick={handleAnchorClick}>
      {title}
    </Navbar.Link>
  );
};

export default NavbarLink;
