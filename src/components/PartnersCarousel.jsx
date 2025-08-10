import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartnersCarousel = () => {
  const navigate = useNavigate();
  const partners = [
    { name: 'HDFC Bank', logo: '/assets/partners/hdfc-bank.png' },
    { name: 'ICICI Bank', logo: '/assets/partners/icici-bank.png' },
    { name: 'Axis Bank', logo: '/assets/partners/axis-bank.png' },
    { name: 'Kotak Mahindra Bank', logo: '/assets/partners/kotak-bank.png' },
    { name: 'SBI', logo: '/assets/partners/sbi.png' },
    { name: 'Bank of Baroda', logo: '/assets/partners/bob.png' },
    { name: 'IDFC First', logo: '/assets/partners/idfc-first.png' },
    { name: 'PNB', logo: '/assets/partners/pnb.png' },
    { name: 'IndusInd Bank', logo: '/assets/partners/indusind.png' },
    { name: 'Yes Bank', logo: '/assets/partners/yes-bank.png' },
    { name: 'Tata Capital', logo: '/assets/partners/tata-capital.png' },
    { name: 'Bajaj Finserv', logo: '/assets/partners/bajaj-finserv.png' },
    { name: 'LIC Housing Finance', logo: '/assets/partners/lic-housing.png' },
    { name: 'Aditya Birla Capital', logo: '/assets/partners/aditya-birla.png' },
    { name: 'IndiaBulls', logo: '/assets/partners/indiabulls.png' }
  ];

  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title animate-slide-up">
            Our Banking Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            We work with India's leading banks and NBFCs to bring you the best loan options
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 mx-4 lg:mx-6"
              >
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-32 h-20 lg:w-40 lg:h-24 flex items-center justify-center group">
                  {/* Placeholder for partner logo - replace with actual logos */}
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-primary-800 group-hover:text-primary-500 transition-colors duration-300">
                      {partner.name.split(' ').map(word => word.charAt(0)).join('')}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 hidden lg:block">
                      {partner.name.length > 12 ? partner.name.substring(0, 12) + '...' : partner.name}
                    </div>
                  </div>
                  
                  {/* Uncomment below when you have actual logos */}
                  {/* <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  /> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm animate-slide-up animate-delay-100">
            <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Banking Partners</div>
            <div className="text-sm text-gray-500 mt-2">Leading banks and NBFCs across India</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm animate-slide-up animate-delay-200">
            <div className="text-4xl font-bold text-primary-500 mb-2">₹500Cr+</div>
            <div className="text-gray-600 font-medium">Loans Facilitated</div>
            <div className="text-sm text-gray-500 mt-2">Total loan amount processed successfully</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm animate-slide-up animate-delay-300">
            <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
            <div className="text-sm text-gray-500 mt-2">Loan approval success rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-slide-up animate-delay-400">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-800 mb-4">
              Get Access to Multiple Lenders
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't limit yourself to one bank. Let us help you compare offers from multiple lenders and choose the best one for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/apply')}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Compare Loan Offers</span>
                <i className="fas fa-chart-bar"></i>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Speak to Expert</span>
                <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;
