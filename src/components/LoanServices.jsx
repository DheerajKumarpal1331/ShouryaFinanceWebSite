import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoanServices = () => {
  const topServices = [
    {
      id: 1,
      icon: 'fas fa-home',
      title: 'Home Loans',
      description: 'Affordable housing finance solutions with competitive interest rates and flexible repayment options.',
      features: [
        'Up to 90% financing',
        'Competitive interest rates',
        'Flexible tenure up to 30 years',
        'Quick processing'
      ],
      loanAmount: '₹5 Lakh - ₹10 Crore',
      interestRate: 'Starting from 8.5%*',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      icon: 'fas fa-briefcase',
      title: 'Unsecured Business Loan',
      description: 'Quick loans without collateral for MSMEs to expand business operations and meet working capital needs.',
      features: [
        'No collateral required',
        'Quick approval in 24-48 hours',
        'Flexible repayment terms',
        'Minimal paperwork'
      ],
      loanAmount: '₹1 Lakh - ₹50 Lakh',
      interestRate: 'Starting from 12%*',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      id: 3,
      icon: 'fas fa-building',
      title: 'Loan Against Property',
      description: 'Unlock the value of your property for funding personal or business needs with attractive interest rates.',
      features: [
        'Up to 70% of property value',
        'Lower interest rates',
        'Flexible end-use',
        'Minimal documentation'
      ],
      loanAmount: '₹10 Lakh - ₹5 Crore',
      interestRate: 'Starting from 9.5%*',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    }
  ];

  const navigate = useNavigate();

  const handleViewAllServices = () => {
    navigate('/services');
  };

  const handleApplyNow = () => {
    navigate('/apply');
  };

  return (
    <section id="loan-services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title animate-slide-up">
            Our Top Loan Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Choose from our most popular loan products designed to meet your financial needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {topServices.map((service, index) => (
            <div
              key={service.id}
              className={`${service.bgColor} border-2 ${service.borderColor} rounded-2xl p-8 card-hover animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 ${service.iconColor} bg-white rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                  <i className={`${service.icon} text-3xl`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <i className="fas fa-check text-green-500 mr-3 text-sm"></i>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Loan Details */}
              <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Loan Amount:</span>
                    <span className="text-sm font-bold text-primary-800">{service.loanAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600">Interest Rate:</span>
                    <span className="text-sm font-bold text-primary-500">{service.interestRate}</span>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApplyNow}
                className="w-full btn-primary text-center"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center animate-slide-up animate-delay-500">
          <button
            onClick={handleViewAllServices}
            className="btn-secondary inline-flex items-center space-x-3 text-lg px-8 py-4"
          >
            <span>View All Services</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          
          <p className="text-gray-500 mt-4 text-sm">
            Explore our complete range of loan products including Working Capital, LRD, and Startup Funding
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoanServices;
