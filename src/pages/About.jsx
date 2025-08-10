import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white pt-24 lg:pt-28 pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shourya Finance</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Your trusted partner in financial solutions with over 10 years of experience
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to make financial services accessible to everyone, Shourya Finance has been 
                  serving customers for over a decade. We understand that every financial need is unique, and we're 
                  committed to providing personalized solutions that fit your specific requirements.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of experienced financial advisors works tirelessly to ensure you get the best possible 
                  rates and terms for your loans. We've helped thousands of customers achieve their dreams of 
                  homeownership, business expansion, and financial stability.
                </p>
                <p className="text-gray-600">
                  With partnerships across 50+ banks and NBFCs, we offer a comprehensive range of financial 
                  products tailored to meet diverse customer needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-primary-600 mt-1"></i>
                    <span className="text-gray-600">10+ Years of Experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-primary-600 mt-1"></i>
                    <span className="text-gray-600">50+ Banking Partners</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-primary-600 mt-1"></i>
                    <span className="text-gray-600">Zero Hidden Charges</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-primary-600 mt-1"></i>
                    <span className="text-gray-600">Quick Approvals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fas fa-check-circle text-primary-600 mt-1"></i>
                    <span className="text-gray-600">End-to-End Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide accessible, transparent, and customer-centric financial solutions that empower 
                  individuals and businesses to achieve their goals and build a secure financial future.
                </p>
              </div>
              <div className="bg-secondary-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-secondary-800 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted and preferred financial services partner, known for our integrity, 
                  innovation, and commitment to customer success across India.
                </p>
              </div>
            </div>

            {/* Team Stats */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Achievements</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600">Banking Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">₹500Cr+</div>
                  <div className="text-gray-600">Loans Disbursed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Let our experts help you find the perfect loan solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/apply'}
              className="bg-white text-primary-800 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Apply Now</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <i className="fas fa-phone"></i>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
