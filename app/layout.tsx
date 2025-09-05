import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const dmSans = localFont({
  src: [
    {
      path: '../public/fonts/dm-sans/dmsans-variablefont_opszwght-webfont.woff2',
      style: 'normal'
    },
    {
      path: '../public/fonts/dm-sans/dmsans-italic-variablefont_opszwght-webfont.woff2',
      style: 'italic'
    }
  ],
  variable: '--font-dm-sans',
  display: 'swap'
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
      <body className={`${dmSans.className} antialiased`}>
        <main className="pt-[var(--header-h,4rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}