
import React, { useState } from 'react';
import type { NavItem } from '../types';
import { NAV_LINKS, TOP_BAR_LINKS, MailIcon, PhoneIcon } from '../constants';

const TopBar: React.FC = () => (
  <div className="bg-gray-800 text-white text-xs">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span>{PhoneIcon} +92-22-9213181-90</span>
        <span>{MailIcon} info@usindh.edu.pk</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        {TOP_BAR_LINKS.map(link => (
          <a key={link.label} href={link.href} className="hover:text-yellow-400 transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const MainHeader: React.FC = () => (
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center">
      <img src="https://usindh.edu.pk/wp-content/uploads/2021/06/us-logo.png" alt="University of Sindh Logo" className="h-20 w-20 mr-4"/>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-red-900">University of Sindh</h1>
        <p className="text-sm text-gray-600">"Truth, the ultimate virtue"</p>
      </div>
    </div>
    <div className="hidden lg:block">
      <input type="text" placeholder="Search..." className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"/>
    </div>
  </div>
);

const Navbar: React.FC<{ onMenuToggle: () => void }> = ({ onMenuToggle }) => (
  <nav className="bg-red-900 text-white shadow-md">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <ul className="hidden lg:flex space-x-1">
        {NAV_LINKS.map((item) => (
          <li key={item.label} className="relative group">
            <a href={item.href} className="block px-4 py-3 hover:bg-red-800 transition-colors duration-300">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="lg:hidden">
        <button onClick={onMenuToggle} className="text-white p-3 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className="hidden md:block">
         <a href="#" className="bg-yellow-400 text-red-900 font-bold px-4 py-3 hover:bg-yellow-300 transition-colors duration-300">ADMISSIONS OPEN</a>
      </div>
    </div>
  </nav>
);

const MobileMenu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-red-900 text-white`}>
        <ul className="flex flex-col">
            {NAV_LINKS.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="block px-4 py-3 hover:bg-red-800 transition-colors duration-300 border-b border-red-800">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);


const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <TopBar />
            <MainHeader />
            <Navbar onMenuToggle={toggleMobileMenu} />
            <MobileMenu isOpen={isMobileMenuOpen} />
        </header>
    );
};

export default Header;
