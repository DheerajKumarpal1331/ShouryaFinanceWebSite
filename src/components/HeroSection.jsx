import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="gradient-bg text-white pt-20 lg:pt-24 pb-12 lg:pb-16 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Get Quick & Hassle-Free Loans with{' '}
              <span className="text-primary-100">Shourya Finance</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleApplyNow}
                className="bg-white text-primary-800 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              
              <button
                onClick={handleContactUs}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <i className="fas fa-phone"></i>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6">
              <div className="grid grid-cols-4 gap-3 lg:gap-4 text-center">
                <div className="animate-fade-in animate-delay-100">
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1">5000+</div>
                  <div className="text-xs lg:text-sm text-white/90 font-medium">Happy Customers</div>
                </div>
                <div className="animate-fade-in animate-delay-200">
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs lg:text-sm text-white/90 font-medium">Partner Banks</div>
                </div>
                <div className="animate-fade-in animate-delay-300">
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1">₹500Cr+</div>
                  <div className="text-xs lg:text-sm text-white/90 font-medium">Loans Disbursed</div>
                </div>
                <div className="animate-fade-in animate-delay-400">
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1">24 - 48hrs</div>
                  <div className="text-xs lg:text-sm text-white/90 font-medium">Quick Approval</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="text-center animate-slide-in-right">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto bg-gradient-to-br from-primary-400 to-secondary-500 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 p-8 lg:p-12">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-chart-line text-4xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Financial Growth</h3>
                  <p className="text-white/90">Your trusted partner for all loan requirements with competitive rates and quick approvals.</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white text-primary-800 p-4 rounded-xl shadow-lg animate-bounce hidden lg:block">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="font-semibold text-sm">Quick Approval</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white text-primary-800 p-4 rounded-xl shadow-lg animate-bounce hidden lg:block" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-shield-alt text-primary-500"></i>
                  <span className="font-semibold text-sm">100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-bounce">
          <button
            onClick={() => document.getElementById('loan-services').scrollIntoView({ behavior: 'smooth' })}
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
