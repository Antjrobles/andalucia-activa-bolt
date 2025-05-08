'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Sun, Moon, LogIn, UserPlus } from 'lucide-react';
// Renombrado a AnchorLink para evitar conflictos con el componente de Next.js
import { Link as AnchorLink } from './ui/Link'; // Renombrado a AnchorLink
import NextJsLink from 'next/link';
import { useThemeStore } from '@/store/themeStore';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${mounted && isScrolled ? 'bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo y nombre - Más a la izquierda */}
          <div className="flex items-center pr-8 border-r border-gray-200 dark:border-gray-700">
            <NextJsLink href="/" className="flex items-center group hover:opacity-90 transition-opacity"
            >
            <BookOpen className="h-8 w-8 text-primary-600 transform transition-transform hover:scale-110" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Andalucía Activa
            </span>
            </NextJsLink>
          </div>

          {/* Navegación Desktop - Centrada */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-1">
              {[
                { href: '#features', text: 'Funcionalidades' },
                { href: '#how-it-works', text: 'Cómo Funciona' },
                { href: '#testimonials', text: 'Testimonios' },
                { href: '#pricing', text: 'Precios' }
              ].map((item) => (
                <AnchorLink
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                >
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                </AnchorLink>
              ))}
            </div>
          </nav>

          {/* Botones de autenticación y tema - A la derecha */}
          <div className="hidden md:flex items-center space-x-6 pl-8 border-l border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md"
              aria-label="Cambiar tema"
            >
              {mounted && isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <NextJsLink
              href="/login"
              className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-0.5"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Iniciar Sesión
            </NextJsLink>

            <NextJsLink
              href="/register"
              className="flex items-center px-5 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Registrarse
            </NextJsLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cambiar tema"
            >
              {mounted && isDarkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>

            <button
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fadeIn bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm mt-4 py-4 px-2 rounded-lg shadow-xl">
            <nav className="flex flex-col space-y-4">
              <AnchorLink
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </AnchorLink>
              <AnchorLink
                href="#how-it-works"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo Funciona
              </AnchorLink>
              <AnchorLink
                href="#testimonials"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </AnchorLink>
              <AnchorLink
                href="#pricing"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </AnchorLink>

              <NextJsLink
                href="/login"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-5 h-5 mr-2" />
                Iniciar Sesión
              </NextJsLink>
              <NextJsLink
                href="/register"
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Registrarse
              </NextJsLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;