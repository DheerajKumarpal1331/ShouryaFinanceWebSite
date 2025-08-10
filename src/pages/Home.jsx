import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LoanServices from '../components/LoanServices';
import WhyChooseUs from '../components/WhyChooseUs';
import PartnersCarousel from '../components/PartnersCarousel';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LoanServices />
      <WhyChooseUs />
      <PartnersCarousel />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
