import React, { useState, useEffect } from 'react';
import { Container } from '../components/Container';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Produk', href: '#produk' },
    { name: 'Promo', href: '#promo' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-accent shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#" className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${
          isScrolled ? 'text-primary' : 'text-accent'
        }`}>
          Warkop <span className="text-secondary">NikiKula</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-secondary ${
                isScrolled ? 'text-primary' : 'text-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-accent'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-accent'} />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <button 
          className="absolute top-6 right-6"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="text-accent w-8 h-8" />
        </button>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-2xl font-semibold text-accent hover:text-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
