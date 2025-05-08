'use client';

import React, { useState, useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import Link from 'next/link';
import { Loader2, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const { isDarkMode } = useThemeStore();
  
  // Animation state
  const [mounted, setMounted] = useState(false);
  
  // Form state (no actual authentication functionality)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Set up animation on mount
  useEffect(() => {
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  // Simulated form submission without actual authentication
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Basic validation
    if (!email || !password) {
      setError('Por favor, introduce tu email y contraseña');
      return;
    }
    
    // Just for UI demonstration
    setIsLoading(true);
    
    // Simulate loading for better UX demonstration
    setTimeout(() => {
      setIsLoading(false);
      // Just log the attempt, but don't actually authenticate
      console.log('Intento de login simulado con:', { email });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple navigation button */}
      <div className={`absolute top-4 left-4 z-10 transition-opacity duration-500 ease-in-out ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <Link 
          href="/"
          className={`flex items-center py-2 px-4 rounded-lg ${
            isDarkMode 
              ? 'text-white hover:bg-gray-800' 
              : 'text-gray-700 hover:bg-gray-100'
          } transition-colors`}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Volver</span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        {/* Left side - Branding */}
        <div className="w-full md:w-1/2 bg-primary-600 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Andalucía Activa
            </h1>
            <p className="text-white/90 text-lg">
              Plataforma educativa para profesores en Andalucía
            </p>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className={`w-full md:w-1/2 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center p-6`}>
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Iniciar Sesión
              </h2>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Accede a tu cuenta para continuar
              </p>
            </div>
            
            {error && (
              <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className={`block font-medium mb-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-3.5 py-2.5 border rounded-md focus:outline-none focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:ring-primary-400/30' 
                      : 'bg-white border-gray-300 text-gray-900 focus:ring-primary-500/30'
                  }`}
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="password" className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Contraseña
                  </label>
                  <button 
                    type="button"
                    onClick={() => {
                      if (email) {
                        setError(null);
                        alert('Funcionalidad de "Olvidaste tu contraseña" no implementada');
                      } else {
                        setError('Por favor, introduce tu email para restablecer la contraseña');
                      }
                    }}
                    className={`text-sm ${isDarkMode ? 'text-primary-400' : 'text-primary-600'} hover:underline`}
                    disabled={isLoading}
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <input
                  type="password"
                  id="password"
                  className={`w-full px-3.5 py-2.5 border rounded-md focus:outline-none focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:ring-primary-400/30' 
                      : 'bg-white border-gray-300 text-gray-900 focus:ring-primary-500/30'
                  }`}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                className={`w-full py-2.5 font-medium rounded-md transition-colors ${
                  isDarkMode
                    ? 'bg-primary-500 hover:bg-primary-400 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                } flex items-center justify-center`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Cargando...</span>
                  </>
                ) : (
                  'Iniciar Sesión'
                )}
              </button>
              
            <div className="text-center pt-4">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                ¿No tienes una cuenta?{' '}
                <Link 
                  href="/register" 
                  className={`${isDarkMode ? 'text-primary-400' : 'text-primary-600'} hover:underline`}
                  onClick={() => {
                    // Create a noticeable page exit animation
                    document.querySelector('.auth-layout')?.classList.add('fade-out');
                  }}
                >
                  Regístrate
                </Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

