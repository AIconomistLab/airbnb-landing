import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromoSection from '@/components/PromoSection';
import HostSection from '@/components/HostSection';
import Footer from '@/components/Footer';

/**
 * Main Landing Page Component
 * Combines all sections to create the complete promotional experience
 * 
 * TODO: Add scroll-based animations and intersection observers
 * TODO: Implement analytics tracking for user interactions
 * FIXME: Optimize image loading across all sections
 * FIXME: Add proper error boundaries for production
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Promotional Offers */}
      <PromoSection />
      
      {/* Host Benefits */}
      <HostSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}