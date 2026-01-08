'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/qui-suis-je', label: 'Qui suis-je ?' },
    { href: '/pour-quoi-faire', label: 'Pour quoi ?' },
    { href: '/pour-qui', label: 'Pour qui ?' },
    { href: '/comment', label: 'Comment ?' },
    { href: '/combien', label: 'Combien ?' },
    { href: '/contact', label: 'Contact', isButton: true },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-md border-b border-gold/20">
        <div className="container mx-auto px-4 md:px-8 py-4 flex flex-row justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="hover:opacity-80 transition-opacity flex items-center gap-3"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Delphine de Lapeyrière - Biographe"
              className="h-12 md:h-16 w-auto"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              style={{ display: 'block', minWidth: '48px', minHeight: '48px' }}
            />
            <span className="text-xl md:text-3xl font-serif font-bold text-navy">
              Delphine, biographe
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-semibold text-navy-light">
            {menuItems.map((item) => (
              <li key={item.href}>
                {item.isButton ? (
                  <a
                    href={item.href}
                    className="px-5 py-2 bg-navy text-white rounded-full hover:bg-navy-light transition-colors shadow-lg transform hover:-translate-y-0.5"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-old-rose transition-colors decoration-gold underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-navy hover:text-old-rose transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gold/20">
            <a
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              onClick={closeMenu}
            >
              <img
                src="/logo.png"
                alt="Delphine de Lapeyrière - Biographe"
                className="h-12 w-auto"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                style={{ display: 'block', minWidth: '48px', minHeight: '48px' }}
              />
              <span className="text-xl font-serif font-bold text-navy">
                Delphine, biographe
              </span>
            </a>
            <button
              onClick={closeMenu}
              className="p-2 text-navy hover:text-old-rose transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col gap-2 px-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  {item.isButton ? (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-5 py-3 bg-navy text-white rounded-full hover:bg-navy-light transition-colors shadow-lg text-center font-semibold"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block px-4 py-3 text-lg font-semibold text-navy-light hover:text-old-rose hover:bg-gold/10 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

