'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

/**
 * Header Component - Navigation and branding
 * Features responsive design with mobile menu
 * TODO: Add authentication state management
 * FIXME: Implement proper accessibility for mobile menu
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Set header height as CSS custom property for dynamic spacing
  useEffect(() => {
    const setHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-h', `${height}px`);
      }
    };

    // Set initial height
    setHeaderHeight();
    
    // Update on resize
    window.addEventListener('resize', setHeaderHeight);
    
    // Cleanup
    return () => window.removeEventListener('resize', setHeaderHeight);
  }, [isMenuOpen]); // Re-run when menu state changes

  const navigationItems = [
    { name: 'Promociones', href: '#promociones' },
    { name: 'Experiencias', href: '#experiencias' },
    { name: 'Conviértete en anfitrión', href: '#host' },
    { name: 'Ayuda', href: '#ayuda' },
  ];

  return (
    <header 
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary-100)] to-[var(--primary-200)] rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="font-bold text-xl text-[var(--primary-100)]">airbnb</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[var(--text-200)] hover:text-[var(--primary-100)] font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[var(--text-200)] hover:text-[var(--primary-100)] font-medium transition-colors duration-200">
              Iniciar sesión
            </button>
            <button className="btn-primary">
              Registrarse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--text-200)] hover:text-[var(--primary-100)] font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button className="text-[var(--text-200)] hover:text-[var(--primary-100)] font-medium py-2 text-left">
                  Iniciar sesión
                </button>
                <button className="btn-primary w-full">
                  Registrarse
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}