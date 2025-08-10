import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I am interested in your loan services. Please provide more information.');
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919999999999';
  };

  return (
    <section className="py-16 lg:py-24 gradient-bg text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-slide-up">
            Ready to Get Your Loan?
          </h2>
          
          <p className="text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-100">
            Start your loan application today and get quick approval with competitive interest rates from India's leading banks and NBFCs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up animate-delay-200">
            <button
              onClick={handleApplyNow}
              className="bg-white text-primary-800 hover:bg-primary-50 font-bold py-4 px-8 lg:py-5 lg:px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl inline-flex items-center space-x-3 text-lg group"
            >
              <i className="fas fa-file-alt text-xl group-hover:scale-110 transition-transform duration-300"></i>
              <span>Apply Now</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 lg:py-5 lg:px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl inline-flex items-center space-x-3 text-lg group"
            >
              <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform duration-300"></i>
              <span>WhatsApp Us</span>
            </button>
            
            <button
              onClick={handleCall}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-bold py-4 px-8 lg:py-5 lg:px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl inline-flex items-center space-x-3 text-lg group"
            >
              <i className="fas fa-phone text-xl group-hover:scale-110 transition-transform duration-300"></i>
              <span>Call Now</span>
            </button>
          </div>

          {/* Process Steps */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 animate-slide-up animate-delay-400">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8">
              Simple 4-Step Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold mb-2">Apply Online</h4>
                <p className="text-sm text-white/80">Fill our simple application form</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold mb-2">Document Verification</h4>
                <p className="text-sm text-white/80">Our team verifies your documents</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold mb-2">Loan Approval</h4>
                <p className="text-sm text-white/80">Get approval in 24-48 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white text-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h4 className="font-semibold mb-2">Disbursement</h4>
                <p className="text-sm text-white/80">Funds transferred to your account</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 animate-slide-up animate-delay-500">
            <p className="text-lg text-white/90 mb-6">
              Join thousands of satisfied customers who chose Shourya Finance
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-green-400"></i>
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-blue-400"></i>
                <span>Quick Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-handshake text-yellow-400"></i>
                <span>Trusted Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-star text-orange-400"></i>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
