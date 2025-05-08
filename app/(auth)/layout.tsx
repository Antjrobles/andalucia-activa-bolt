'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '@/styles/transitions.css'; // Import dedicated transitions CSS

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  
  // Simple entrance animation on initial load
  useEffect(() => {
    // Set a small delay to ensure the DOM is ready
    const timer = setTimeout(() => {
      setShow(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    // Apply obvious entrance animation to the entire content
    <div 
      className={`auth-layout min-h-screen page-transition ${show ? 'page-transition-enter' : ''}`}
      style={{ opacity: 0 }} // Start invisible, animation will make it visible
    >
      {children}
    </div>
  );
}

