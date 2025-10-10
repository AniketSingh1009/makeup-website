import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = ({ onPortfolioClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-neutral-800 shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-display font-bold ${
              isScrolled 
                ? 'text-neutral-800 dark:text-white' 
                : 'text-white'
            }`}>
              Preety Gupta
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.name === 'Portfolio' ? (
                  <button
                    key={item.name}
                    onClick={onPortfolioClick}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500' 
                        : 'text-white hover:text-primary-200'
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-neutral-600 dark:text-neutral-300 hover:text-primary-500' 
                        : 'text-white hover:text-primary-200'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              ))}
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isScrolled
                    ? 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    : 'text-white hover:bg-white/10'
                }`}
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              
              <button 
                className="btn-primary"
                onClick={() => {
                  const message = "Hi! I would like to book a makeup session. 🖌️";
                  const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled 
                  ? 'text-neutral-600 dark:text-neutral-300' 
                  : 'text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-neutral-800 rounded-lg shadow-lg">
              {navItems.map((item) => (
                item.name === 'Portfolio' ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      onPortfolioClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-neutral-600 hover:text-primary-500 font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-neutral-600 hover:text-primary-500 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center w-full px-3 py-2 text-neutral-600 dark:text-neutral-300 hover:text-primary-500 font-medium"
              >
                {isDarkMode ? (
                  <>
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>
              
              <button 
                className="w-full mt-2 btn-primary"
                onClick={() => {
                  const message = "Hi! I would like to book a makeup session. 🖌️";
                  const whatsappUrl = `https://wa.me/+918709601720?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;