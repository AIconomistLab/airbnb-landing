import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

// TODO: Optimize font loading strategy for better performance
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Airbnb Promociones | Descubre Experiencias Únicas',
  description: 'Explora las mejores promociones de Airbnb. Encuentra hogares únicos y experiencias inolvidables con descuentos especiales.',
  keywords: 'Airbnb, promociones, descuentos, hospedaje, experiencias únicas',
  // FIXME: Add proper OG tags and meta images before production
};

/**
 * Root layout component for the Airbnb promotional landing page
 * Provides global styles and font configuration
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}