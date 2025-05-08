'use client';

import React, { useState, useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import Link from 'next/link';
import { Loader2, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const { isDarkMode } = useThemeStore();
  
  // Animation state
  const [mounted, setMounted] = useState(false);
  
  // Form state (no actual authentication functionality)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
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
    setSuccess(false);
    
    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    // Just for UI demonstration
    setIsLoading(true);
    
    // Simulate loading for better UX demonstration
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      // Clear form on success
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      // Just log the attempt, but don't actually register
      console.log('Intento de registro simulado con:', { email });
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
              Regístrate para acceder a todas las funcionalidades
            </p>
          </div>
        </div>

        {/* Right side - Register form */}
        <div className={`w-full md:w-1/2 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center p-6`}>
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Crear nueva cuenta
              </h2>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Completa el formulario para registrarte
              </p>
            </div>
            
            {success && (
              <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md">
                Registro simulado exitoso. En una implementación real, se enviaría un email de confirmación.
              </div>
            )}
            
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
                  disabled={isLoading || success}
                />
              </div>
              
              <div>
                <label htmlFor="password" className={`block font-medium mb-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Contraseña
                </label>
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
                  disabled={isLoading || success}
                />
                <p className={`mt-1 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Mínimo 6 caracteres
                </p>
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className={`block font-medium mb-1.5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`w-full px-3.5 py-2.5 border rounded-md focus:outline-none focus:ring-2 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-700 text-white focus:ring-primary-400/30' 
                      : 'bg-white border-gray-300 text-gray-900 focus:ring-primary-500/30'
                  }`}
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isLoading || success}
                />
              </div>
              
              <button
                type="submit"
                className={`w-full py-2.5 font-medium rounded-md transition-colors ${
                  isDarkMode
                    ? 'bg-primary-500 hover:bg-primary-400 text-white'
                    : 'bg-primary-600 hover:bg-primary-700 text-white'
                } flex items-center justify-center mt-4`}
                disabled={isLoading || success}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Cargando...</span>
                  </>
                ) : (
                  'Crear cuenta'
                )}
              </button>
              
              <div className="text-center pt-4">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                ¿Ya tienes una cuenta?{' '}
                <Link 
                  href="/login" 
                  className={`${isDarkMode ? 'text-primary-400' : 'text-primary-600'} hover:underline`}
                  onClick={() => {
                    // Create a noticeable page exit animation
                    document.querySelector('.auth-layout')?.classList.add('fade-out');
                  }}
                >
                  Iniciar sesión
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

