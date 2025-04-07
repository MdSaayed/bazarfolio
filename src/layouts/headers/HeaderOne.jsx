import React, { useState } from 'react';
import { DesktopMenu, ResponsiveMenu } from '../../components';
 
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
        <header className='bg-blue-gray'>
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
