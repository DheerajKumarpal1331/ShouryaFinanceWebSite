import React from 'react';
import { useNavigate } from 'react-router-dom';

const Testimonials = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Home Loan Customer',
      location: 'Mumbai',
      rating: 5,
      text: 'Shourya Finance helped me secure a home loan quickly with the best interest rates. Their team was professional and guided me through every step of the process. Highly recommended!',
      avatar: '/assets/testimonials/rajesh-kumar.jpg',
      loanType: 'Home Loan',
      amount: '₹45 Lakh'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Business Loan Customer',
      location: 'Delhi',
      rating: 5,
      text: 'Their business loan process was simple and stress-free. I got approval within 48 hours without any collateral. The team understood my business needs perfectly.',
      avatar: '/assets/testimonials/priya-sharma.jpg',
      loanType: 'Business Loan',
      amount: '₹25 Lakh'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Property Loan Customer',
      location: 'Bangalore',
      rating: 5,
      text: 'Excellent service for loan against property. They helped me get 70% of my property value at competitive rates. The documentation process was smooth and transparent.',
      avatar: '/assets/testimonials/amit-patel.jpg',
      loanType: 'Loan Against Property',
      amount: '₹80 Lakh'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      ></i>
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title animate-slide-up">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Shourya Finance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 card-hover animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <i className="fas fa-quote-right text-3xl"></i>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                {/* Uncomment when you have actual avatars */}
                {/* <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                /> */}
                
                <div>
                  <div className="font-bold text-primary-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>

              {/* Loan Details */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{testimonial.loanType}</span>
                  <span className="font-bold text-primary-500">{testimonial.amount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-500 rounded-2xl p-8 lg:p-12 text-white text-center animate-slide-up animate-delay-400">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8">
            Our Success Stories Speak for Themselves
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Approval Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-primary-100">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24-48hrs</div>
              <div className="text-primary-100">Avg. Approval Time</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center space-x-2">
            <i className="fas fa-shield-alt text-green-500 text-xl"></i>
            <span className="text-gray-600 font-medium">100% Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-lock text-blue-500 text-xl"></i>
            <span className="text-gray-600 font-medium">Data Protected</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-certificate text-purple-500 text-xl"></i>
            <span className="text-gray-600 font-medium">RBI Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-headset text-orange-500 text-xl"></i>
            <span className="text-gray-600 font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
