import React, { useState, useEffect } from 'react';
import { DesktopMenu, ResponsiveMenu } from '../../components';

const HeaderOne = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const menuItems = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Works", path: "#works" },
    { name: "Blog", path: "#blog" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10); // adjust if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${isSticky ? 'bg-blue-gray/90 backdrop-blur-md' : 'bg-blue-gray'}`}>
      <div className="container padding-y-0">
        <DesktopMenu menuItems={menuItems} setMenuOpen={setMenuOpen} />
        <ResponsiveMenu menuItems={menuItems} isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default HeaderOne;
