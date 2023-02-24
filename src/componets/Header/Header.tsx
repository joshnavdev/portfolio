import { Button, Navbar, useTheme } from 'flowbite-react';
import { useEffect, useState } from 'react';
import NavbarLink from '../NavbarLink/NavbarLink';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

type MenuType = {
  id: string;
  title: string;
  scroll: boolean;
};

const Header: React.FC = () => {
  const menuList: MenuType[] = [
    { id: 'about', title: 'About', scroll: true },
    { id: 'experience', title: 'Experience', scroll: true },
    { id: 'work', title: 'Work', scroll: true },
    { id: 'contact', title: 'Contact', scroll: true },
  ];

  // const theme = useTheme().theme;
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
          <NavbarLink key={menu.id} title={menu.title} href={`${menu.id}`} scroll={menu.scroll} />
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
