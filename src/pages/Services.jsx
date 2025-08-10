import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Services = () => {
  

  const services = [
    {
      id: 'home-loans',
      title: 'Home Loans',
      icon: 'fas fa-home',
      description: 'Make your dream home a reality with our competitive home loan rates',
      features: ['Interest rates starting from 8.5%', 'Loan amount up to ₹5 Crores', 'Tenure up to 30 years', 'Minimal documentation'],
      benefits: ['Quick approval process', 'Flexible repayment options', 'No prepayment charges', 'Expert guidance']
    },
    {
      id: 'business-loans',
      title: 'Unsecured Business Loans',
      icon: 'fas fa-briefcase',
      description: 'Fuel your business growth with our flexible business loan solutions',
      features: ['Loan amount up to ₹50 Lakhs', 'Quick disbursement', 'No collateral required', 'Competitive interest rates'],
      benefits: ['Minimal documentation', 'Flexible tenure options', 'Quick approval', 'Expert business advisory']
    },
    {
      id: 'property-loans',
      title: 'Loan Against Property',
      icon: 'fas fa-building',
      description: 'Unlock the value of your property for any financial need',
      features: ['Loan amount up to ₹10 Crores', 'Interest rates from 9%', 'Tenure up to 20 years', 'Multiple property types accepted'],
      benefits: ['Lower interest rates', 'Higher loan amounts', 'Flexible end-use', 'Quick processing']
    },
    {
      id: 'working-capital',
      title: 'Working Capital Loans',
      icon: 'fas fa-chart-line',
      description: 'Maintain smooth business operations with our working capital solutions',
      features: ['Flexible credit limits', 'Overdraft facilities', 'Quick access to funds', 'Competitive rates'],
      benefits: ['Improve cash flow', 'Seasonal funding', 'Growth opportunities', 'Expert support']
    },
    {
      id: 'personal-loans',
      title: 'Personal Loans',
      icon: 'fas fa-user',
      description: 'Meet your personal financial needs with our hassle-free personal loans',
      features: ['Loan amount up to ₹40 Lakhs', 'Quick approval', 'No collateral required', 'Flexible tenure'],
      benefits: ['Instant approval', 'Minimal documentation', 'Competitive rates', 'Multiple purposes']
    },
    {
      id: 'vehicle-loans',
      title: 'Vehicle Loans',
      icon: 'fas fa-car',
      description: 'Drive your dream vehicle with our attractive auto loan offers',
      features: ['New & used vehicle financing', 'Up to 90% financing', 'Competitive interest rates', 'Quick processing'],
      benefits: ['Flexible repayment', 'Insurance assistance', 'Quick approval', 'Doorstep service']
    }
  ];

  const handleApplyNow = (serviceId) => {
    window.location.href = `/apply?service=${serviceId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white pt-24 lg:pt-28 pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>
      {/* Why Choose Our Services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quick Processing</h3>
                <p className="text-gray-600">Fast approval and disbursement process to meet your urgent financial needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure & Transparent</h3>
                <p className="text-gray-600">Complete transparency in all processes with no hidden charges or fees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-headset text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Support</h3>
                <p className="text-gray-600">Dedicated relationship managers to guide you through every step</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} id={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <i className={`${service.icon} text-primary-600 text-xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <i className="fas fa-check text-primary-600 mt-1 text-sm"></i>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <i className="fas fa-star text-secondary-500 mt-1 text-sm"></i>
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button
                      onClick={() => handleApplyNow(service.id)}
                      className="w-full btn-primary text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Service?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Our experts are here to help you find the perfect financial solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-primary-800 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Talk to Expert</span>
              <i className="fas fa-phone"></i>
            </button>
            <button
              onClick={() => window.open('https://wa.me/919999999999', '_blank')}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
