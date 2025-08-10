import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Apply = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    panNumber: '',
    aadharNumber: '',
    
    // Loan Information
    loanType: '',
    loanAmount: '',
    tenure: '',
    purpose: '',
    
    // Employment Information
    employmentType: '',
    companyName: '',
    designation: '',
    monthlyIncome: '',
    workExperience: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Additional Information
    existingLoans: '',
    bankAccount: '',
    terms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert('Please accept the terms and conditions');
      return;
    }
    // Handle form submission here
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white pt-24 lg:pt-28 pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Loan Application</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Apply for your loan in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        PAN Number *
                      </label>
                      <input
                        type="text"
                        id="panNumber"
                        name="panNumber"
                        required
                        value={formData.panNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="ABCDE1234F"
                      />
                    </div>
                  </div>
                </div>

                {/* Loan Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Type *
                      </label>
                      <select
                        id="loanType"
                        name="loanType"
                        required
                        value={formData.loanType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select loan type</option>
                        <option value="home-loan">Home Loan</option>
                        <option value="business-loan">Business Loan</option>
                        <option value="property-loan">Loan Against Property</option>
                        <option value="working-capital">Working Capital</option>
                        <option value="personal-loan">Personal Loan</option>
                        <option value="vehicle-loan">Vehicle Loan</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
                        Loan Amount Required *
                      </label>
                      <input
                        type="number"
                        id="loanAmount"
                        name="loanAmount"
                        required
                        value={formData.loanAmount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter amount in ₹"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="tenure" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Tenure (Years) *
                      </label>
                      <select
                        id="tenure"
                        name="tenure"
                        required
                        value={formData.tenure}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select tenure</option>
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="5">5 Years</option>
                        <option value="10">10 Years</option>
                        <option value="15">15 Years</option>
                        <option value="20">20 Years</option>
                        <option value="25">25 Years</option>
                        <option value="30">30 Years</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-2">
                        Purpose of Loan
                      </label>
                      <input
                        type="text"
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Brief description"
                      />
                    </div>
                  </div>
                </div>

                {/* Employment Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Employment Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 mb-2">
                        Employment Type *
                      </label>
                      <select
                        id="employmentType"
                        name="employmentType"
                        required
                        value={formData.employmentType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select employment type</option>
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self Employed</option>
                        <option value="business">Business Owner</option>
                        <option value="professional">Professional</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Income *
                      </label>
                      <input
                        type="number"
                        id="monthlyIncome"
                        name="monthlyIncome"
                        required
                        value={formData.monthlyIncome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter monthly income in ₹"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Business Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700 mb-2">
                        Work Experience (Years)
                      </label>
                      <input
                        type="number"
                        id="workExperience"
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I agree to the <button type="button" className="text-primary-600 hover:text-primary-700 underline">Terms and Conditions</button> and
                      <button type="button" className="text-primary-600 hover:text-primary-700 underline"> Privacy Policy</button>. I authorize Shourya Finance
                      to contact me via phone, email, or SMS regarding my loan application.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apply;
