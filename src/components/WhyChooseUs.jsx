import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const reasons = [
    {
      id: 1,
      icon: 'fas fa-award',
      title: 'Trusted Loan Advisor with 10+ Years Experience',
      description: 'Decade-long expertise in financial advisory services with proven track record of successful loan approvals.',
      bgColor: 'bg-blue-500',
      delay: '0s'
    },
    {
      id: 2,
      icon: 'fas fa-handshake',
      title: 'Access to 50+ Banks and NBFCs',
      description: 'Extensive network of banking partners ensures you get the best loan options tailored to your needs.',
      bgColor: 'bg-green-500',
      delay: '0.1s'
    },
    {
      id: 3,
      icon: 'fas fa-shield-alt',
      title: 'Zero Hidden Charges and Transparent Process',
      description: 'Complete transparency in all dealings with no hidden fees or surprise charges throughout the process.',
      bgColor: 'bg-purple-500',
      delay: '0.2s'
    },
    {
      id: 4,
      icon: 'fas fa-users',
      title: 'End-to-End Support from Application to Disbursement',
      description: 'Dedicated relationship manager provides complete assistance from application to loan disbursement.',
      bgColor: 'bg-orange-500',
      delay: '0.3s'
    },
    {
      id: 5,
      icon: 'fas fa-clock',
      title: 'Quick Approvals and Competitive Interest Rates',
      description: 'Fast-track processing with approvals in 24-48 hours and negotiated competitive rates from lenders.',
      bgColor: 'bg-red-500',
      delay: '0.4s'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title animate-slide-up">
            Why Choose Shourya Finance?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            We stand out from the competition with our commitment to excellence and customer satisfaction
          </p>
        </div>

        {/* Reasons Grid - Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.id}
              className="group bg-white border border-gray-200 rounded-xl p-4 lg:p-6 card-hover animate-slide-up text-center"
              style={{ animationDelay: reason.delay }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 ${reason.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  <i className={`${reason.icon} text-lg lg:text-xl text-white`}></i>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm lg:text-base font-bold text-primary-800 mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up animate-delay-500">
          <div className="bg-gradient-to-r from-primary-800 to-primary-500 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of satisfied customers who chose Shourya Finance for their loan needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/apply')}
                className="bg-white text-primary-800 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Application</span>
                <i className="fas fa-arrow-right"></i>
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>Talk to Expert</span>
                <i className="fas fa-phone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
