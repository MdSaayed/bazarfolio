import React, { useState, useEffect } from 'react';
import { DesktopMenu, ResponsiveMenu } from '../../components';

const HeaderOne = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Works", path: "#works" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];
 

  return (
    <header className={`bg-blue-gray z-40 `}>
      <div className="container padding-y-0">
        <DesktopMenu menuItems={menuItems} setMenuOpen={setMenuOpen} />
        <ResponsiveMenu menuItems={menuItems} isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default HeaderOne;
