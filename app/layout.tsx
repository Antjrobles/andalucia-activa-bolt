import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css'; // Asegúrate de crear este archivo de estilos más tarde

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Andalucía Activa', // Puedes cambiar el título
  description: 'Educando inteligentemente', // Puedes cambiar la descripción
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

