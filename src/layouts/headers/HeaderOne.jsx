import React, { useState } from 'react';
import ResponsiveMenu from '../../components/responsive-menu/ResponsiveMenu';
import DesktopMenu from '../../components/desktop-menu/DesktopMenu';

const HeaderOne = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Works", path: "/works" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
      ];

    return (
        <header className='bg-gray-950'>
            <div className="container padding-y-0">
                {/* Desktop menu */}
                <DesktopMenu menuItems={menuItems} setMenuOpen={setMenuOpen}/>

                {/* Responsive menu*/}
                <ResponsiveMenu menuItems={menuItems} isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
            </div>
        </header>
    );
};

export default HeaderOne;
