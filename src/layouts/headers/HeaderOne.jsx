import React, { useState, useEffect } from 'react';
import { DesktopMenu, ResponsiveMenu } from '../../components';

const HeaderOne = ({ transparent = false }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
      setIsSticky(window.scrollY > 10); 
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 

  return (
    <header
      className={`z-40 lg:sticky top-0 transition-all duration-300 h-[104px] overflow-hidden  
        ${transparent ? "-mb-[104px]" : ""}
        ${
          transparent
            ? isSticky
              ? "lg:backdrop-blur lg:bg-dark-green/70 lg:shadow-md"
              : "bg-transparent"
            : isSticky
            ? "lg:backdrop-blur lg:bg-blue-gray/70 lg:shadow-md"
            : "bg-blue-gray"
        }`}
    >

      <div className="container relative padding-y-0">
        <DesktopMenu menuItems={menuItems} setMenuOpen={setMenuOpen} />
        <ResponsiveMenu menuItems={menuItems} isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
};

export default HeaderOne;
