import { Button, Navbar, useTheme } from 'flowbite-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

type MenuType = {
  id: string;
  title: string;
};

const Header: React.FC = () => {
  const menuList: MenuType[] = [
    { id: 'about', title: 'About' },
    { id: 'experience', title: 'Experience' },
    { id: 'work', title: 'Work' },
    { id: 'contact', title: 'Contact' },
  ];

  const theme = useTheme().theme;

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://joshnavdev.com/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">JoshNavDev</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ThemeToggle />
        <Button className="mx-2" color="light">
          Resume
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        {menuList.map((menu) => (
          <Navbar.Link key={menu.id} href={`#${menu.id}`} className="">
            {menu.title}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
