import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Apply Now', href: '/apply' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const services = [
    { label: 'Home Loans', href: '/services#home-loans' },
    { label: 'Business Loans', href: '/services#business-loans' },
    { label: 'Loan Against Property', href: '/services#property-loans' },
    { label: 'Working Capital', href: '/services#working-capital' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Grievance', href: '/grievance' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/assets/logo-placeholder.png" 
                alt="Shourya Finance Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Shourya Finance</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Trusted financial advisor helping individuals and businesses get loans from leading banks and NBFCs in India. Your financial success is our priority.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/shouryafinance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-500 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-white"></i>
              </a>
              <a
                href="https://instagram.com/shouryafinance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-whatsapp text-white"></i>
              </a>
              <a
                href="https://facebook.com/shouryafinance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fab fa-facebook text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-phone text-primary-400 mt-1"></i>
                <div>
                  <a
                    href="tel:+919999999999"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    +91 99999 99999
                  </a>
                  <p className="text-sm text-gray-400">Mon - Sat: 9 AM - 7 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="fas fa-envelope text-primary-400 mt-1"></i>
                <div>
                  <a
                    href="mailto:contact@shouryafinance.in"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    contact@shouryafinance.in
                  </a>
                  <p className="text-sm text-gray-400">Quick response guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-primary-400 mt-1"></i>
                <div>
                  <p className="text-gray-300">
                    123 Business District<br />
                    Financial Center, Mumbai<br />
                    Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest loan offers, financial tips, and industry insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors duration-300"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Shourya Finance. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              Shourya Finance is a loan advisory service. We do not charge any fees from customers. 
              Our services are free of cost. We are not a lender but help you connect with appropriate lenders. 
              All loan approvals are subject to lender's terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
