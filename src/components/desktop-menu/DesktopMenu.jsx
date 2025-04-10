import React from 'react';
import { Link } from 'react-router-dom';
import { AlignJustify } from "lucide-react";
import { Button } from '../../components';
import useScrollSpy from '../../hooks/useScrollSpy'; 

const DesktopMenu = ({ setMenuOpen, menuItems }) => {
  const sectionIds = menuItems.map(item => item.path.replace('#', ''));
  const activeSection = useScrollSpy(sectionIds, 100); 

  return (
    <div className='flex items-center justify-between text-white py-4 lg:py-6'>
      <div className='flex items-center md:justify-between xl:justify-start w-full xl:w-fit gap-20'>
        <div>
          <Link to="/">LOGO</Link>
        </div>

        <nav className='hidden lg:block border border-white/50 rounded-4xl py-2 px-8'>
          <ul className='flex items-center gap-10'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className={`px-4 py-2 inline-block rounded-3xl transition ${
                    activeSection === item.path.replace('#', '') ? 'bg-graphite' : ''
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='items-center hidden xl:flex'>
        <Button text={'Start a Project'} to='#contact' />
      </div>

      <AlignJustify
        className="block lg:hidden rounded-3xl md:block cursor-pointer"
        onClick={() => setMenuOpen(true)}
      />
    </div>
  );
};

export default DesktopMenu;
