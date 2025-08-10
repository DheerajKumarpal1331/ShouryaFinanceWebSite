import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const blogPosts = [
    {
      id: 1,
      title: 'Home Loan Interest Rates: What to Expect in 2024',
      excerpt: 'Understanding the current trends in home loan interest rates and how they might affect your borrowing decisions.',
      date: 'March 15, 2024',
      category: 'Home Loans',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/400x250/003366/ffffff?text=Home+Loans'
    },
    {
      id: 2,
      title: 'Business Loan vs. Working Capital: Which is Right for You?',
      excerpt: 'A comprehensive guide to help you choose between business loans and working capital solutions for your business needs.',
      date: 'March 10, 2024',
      category: 'Business Loans',
      readTime: '7 min read',
      image: 'https://via.placeholder.com/400x250/0099cc/ffffff?text=Business+Loans'
    },
    {
      id: 3,
      title: 'Top 5 Documents Required for Loan Against Property',
      excerpt: 'Essential documentation checklist to ensure smooth processing of your loan against property application.',
      date: 'March 5, 2024',
      category: 'Property Loans',
      readTime: '4 min read',
      image: 'https://via.placeholder.com/400x250/003366/ffffff?text=Property+Loans'
    },
    {
      id: 4,
      title: 'Credit Score Improvement: 10 Proven Strategies',
      excerpt: 'Learn effective methods to improve your credit score and increase your chances of loan approval.',
      date: 'February 28, 2024',
      category: 'Financial Tips',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/400x250/0099cc/ffffff?text=Credit+Score'
    },
    {
      id: 5,
      title: 'EMI Calculator: How to Plan Your Loan Repayment',
      excerpt: 'Master the art of loan planning with our comprehensive guide to EMI calculations and repayment strategies.',
      date: 'February 20, 2024',
      category: 'Financial Planning',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/400x250/003366/ffffff?text=EMI+Calculator'
    },
    {
      id: 6,
      title: 'Personal Loan vs. Credit Card: Making the Right Choice',
      excerpt: 'Compare personal loans and credit cards to determine the best financing option for your immediate needs.',
      date: 'February 15, 2024',
      category: 'Personal Finance',
      readTime: '4 min read',
      image: 'https://via.placeholder.com/400x250/0099cc/ffffff?text=Personal+Loans'
    },
    {
      id: 7,
      title: 'GST Impact on Business Loans: What You Need to Know',
      excerpt: 'Understanding how GST affects your business loan eligibility and documentation requirements.',
      date: 'February 10, 2024',
      category: 'Business Loans',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/400x250/003366/ffffff?text=GST+Business'
    },
    {
      id: 8,
      title: 'Real Estate Investment: Financing Your Property Portfolio',
      excerpt: 'Strategic approaches to financing multiple properties and building a successful real estate portfolio.',
      date: 'February 5, 2024',
      category: 'Property Loans',
      readTime: '8 min read',
      image: 'https://via.placeholder.com/400x250/0099cc/ffffff?text=Real+Estate'
    },
    {
      id: 9,
      title: 'Emergency Fund vs. Personal Loan: Making Smart Choices',
      excerpt: 'When to use your emergency fund and when a personal loan might be the better financial decision.',
      date: 'January 30, 2024',
      category: 'Financial Tips',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/400x250/003366/ffffff?text=Emergency+Fund'
    }
  ];

  const categories = ['All', 'Home Loans', 'Business Loans', 'Property Loans', 'Financial Tips', 'Financial Planning', 'Personal Finance'];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  // Get posts to display based on visible count
  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setVisiblePosts(6); // Reset visible posts when filtering
  };

  // Handle load more posts
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Thank you for subscribing with email: ${newsletterEmail}`);
      setNewsletterEmail('');
    }
  };

  // Handle blog post click
  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  // Handle apply now from blog
  const handleApplyFromBlog = () => {
    navigate('/apply');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white pt-24 lg:pt-28 pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Insights Blog</h1>
            <p className="text-xl md:text-2xl text-primary-100">
              Stay updated with the latest trends, tips, and insights in the financial world
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              {selectedCategory !== 'All' && (
                <div className="text-center mt-4">
                  <p className="text-gray-600">
                    Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in "{selectedCategory}"
                  </p>
                </div>
              )}
            </div>

            {/* Featured Post */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto cursor-pointer" onClick={() => handlePostClick(blogPosts[0].id)}>
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                      <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                    </div>
                    <h2
                      className="text-2xl font-bold text-gray-800 mb-4 cursor-pointer hover:text-primary-600 transition-colors duration-300"
                      onClick={() => handlePostClick(blogPosts[0].id)}
                    >
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                    <button
                      onClick={() => handlePostClick(blogPosts[0].id)}
                      className="btn-primary self-start px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedPosts.slice(1).map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="h-48" onClick={() => handlePostClick(post.id)}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <button
                        onClick={() => handleCategoryFilter(post.category)}
                        className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-secondary-200 transition-colors duration-300"
                      >
                        {post.category}
                      </button>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    <h3
                      className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-primary-600 transition-colors duration-300"
                      onClick={() => handlePostClick(post.id)}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <button
                        onClick={() => handlePostClick(post.id)}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-300"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && (
              <div className="text-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="btn-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Load More Articles ({filteredPosts.length - visiblePosts} remaining)
                </button>
              </div>
            )}

            {/* No More Posts Message */}
            {visiblePosts >= filteredPosts.length && filteredPosts.length > 6 && (
              <div className="text-center mt-12">
                <p className="text-gray-600">You've reached the end of the articles in this category.</p>
                <button
                  onClick={() => handleCategoryFilter('All')}
                  className="mt-4 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-300"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter for the latest financial insights and loan updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-primary-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center cursor-pointer group" onClick={() => handleCategoryFilter('Home Loans')}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <i className="fas fa-home text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">Home Loans</h3>
                <p className="text-gray-600">Everything you need to know about home financing</p>
              </div>
              <div className="text-center cursor-pointer group" onClick={() => handleCategoryFilter('Financial Tips')}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <i className="fas fa-chart-line text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">Investment Tips</h3>
                <p className="text-gray-600">Smart strategies for growing your wealth</p>
              </div>
              <div className="text-center cursor-pointer group" onClick={() => handleCategoryFilter('Financial Planning')}>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                  <i className="fas fa-calculator text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">Financial Planning</h3>
                <p className="text-gray-600">Plan your financial future with expert advice</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Apply for a Loan?</h3>
              <p className="text-gray-600 mb-6">Get expert advice and competitive rates for your financial needs</p>
              <button
                onClick={handleApplyFromBlog}
                className="btn-primary px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
