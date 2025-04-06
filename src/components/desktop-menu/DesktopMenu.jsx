import React from 'react';
import { Link } from 'react-router-dom';
import { AlignJustify } from "lucide-react";  
import Button from '../../components/button/Button';

const DesktopMenu = ({setMenuOpen,menuItems}) => {
    return (
        <div className='flex items-center justify-between text-white py-4 lg:py-6'>
            <div className='flex items-center md:justify-between xl:justify-start w-full xl:w-fit gap-20'>
                <div>
                    <Link to="/">LOGO</Link>
                </div>

                {/* Desktop nav: visible on lg+ only */}
                <nav className='hidden lg:block'>
                    <ul className='flex items-center gap-10'>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    className="px-4 py-2 rounded-3xl bg-[#18191B]"
                                    to={item.path}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Desktop button: hidden on md and below */}
            <div className='items-center hidden xl:flex'>
                    <Button text={'Start a Project'} />
            </div>
            {/* Responsive menu button visible on md and below */}
            <AlignJustify className="block lg:hidden rounded-3xl md:block cursor-pointer" onClick={() => setMenuOpen(true)} />
        </div>
    );
};

export default DesktopMenu;