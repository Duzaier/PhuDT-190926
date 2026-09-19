import Header from './components/layout/Header.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import PartnersSection from './components/sections/PartnersSection.jsx';
import WhoWeAreSection from './components/sections/WhoWeAreSection.jsx';
import ServicesSection from './components/sections/ServicesSection.jsx';
import NeighborhoodsSection from './components/sections/NeighborhoodsSection.jsx';
import TeamSection from './components/sections/TeamSection.jsx';
import BlogsSection from './components/sections/BlogsSection.jsx';
import FeaturedListingsSection from './components/sections/FeaturedListingsSection.jsx';
import TestimonialsSection from './components/sections/TestimonialsSection.jsx';
import CTASection from './components/sections/CTASection.jsx';
import Footer from './components/layout/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main id="main-content">
        <HeroSection />
        <PartnersSection />
        <WhoWeAreSection />
        <FeaturedListingsSection />
        <ServicesSection />
        <NeighborhoodsSection />
        <TeamSection />
        <BlogsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
