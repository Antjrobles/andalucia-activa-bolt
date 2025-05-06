import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css'; // Asegúrate de crear este archivo de estilos más tarde

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Aplicación Next.js', // Puedes cambiar el título
  description: 'Generado por create next app', // Puedes cambiar la descripción
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

