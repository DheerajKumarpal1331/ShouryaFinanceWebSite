import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load blog post from static data
  useEffect(() => {
    const loadBlogPost = () => {
      setLoading(true);
      // Use static data for demo
      const staticPost = getStaticBlogPost(id);
      if (staticPost) {
        setPost(staticPost);
      } else {
        setError('Blog post not found');
      }
      setLoading(false);
    };

    loadBlogPost();
  }, [id]);

  // Static blog posts data (fallback when backend is not available)
  const getStaticBlogPost = (postId) => {
    const blogPosts = [
    {
      id: 1,
      title: 'Home Loan Interest Rates: What to Expect in 2024',
      excerpt: 'Understanding the current trends in home loan interest rates and how they might affect your borrowing decisions.',
      content: `
        <h2>Current Market Trends</h2>
        <p>The home loan market in 2024 has seen significant changes due to various economic factors. Interest rates have been fluctuating based on RBI policies and global economic conditions.</p>
        
        <h3>Key Factors Affecting Interest Rates</h3>
        <ul>
          <li><strong>RBI Policy Rates:</strong> The Reserve Bank of India's repo rate directly impacts home loan interest rates.</li>
          <li><strong>Credit Score:</strong> Your CIBIL score plays a crucial role in determining the interest rate you'll receive.</li>
          <li><strong>Loan Amount:</strong> Higher loan amounts often come with better interest rates.</li>
          <li><strong>Employment Type:</strong> Salaried employees typically get better rates than self-employed individuals.</li>
        </ul>
        
        <h3>Current Rate Ranges</h3>
        <p>As of 2024, home loan interest rates typically range from:</p>
        <ul>
          <li>SBI: 8.50% - 9.65% per annum</li>
          <li>HDFC Bank: 8.60% - 9.50% per annum</li>
          <li>ICICI Bank: 8.75% - 9.75% per annum</li>
          <li>Axis Bank: 8.75% - 9.50% per annum</li>
        </ul>
        
        <h3>Tips for Getting Better Rates</h3>
        <ol>
          <li><strong>Maintain a Good Credit Score:</strong> Aim for a CIBIL score above 750</li>
          <li><strong>Compare Multiple Lenders:</strong> Don't settle for the first offer</li>
          <li><strong>Consider Existing Relationships:</strong> Your current bank may offer preferential rates</li>
          <li><strong>Negotiate:</strong> Interest rates are often negotiable, especially for high-value loans</li>
        </ol>
        
        <h3>Conclusion</h3>
        <p>While interest rates continue to evolve, being informed and prepared can help you secure the best possible deal for your home loan. Consider consulting with financial advisors to make the most informed decision.</p>
      `,
      date: 'March 15, 2024',
      category: 'Home Loans',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/800x400/003366/ffffff?text=Home+Loan+Rates',
      author: 'Shourya Finance Team'
    },
    {
      id: 2,
      title: 'Business Loan vs. Working Capital: Which is Right for You?',
      excerpt: 'A comprehensive guide to help you choose between business loans and working capital solutions for your business needs.',
      content: `
        <h2>Understanding the Difference</h2>
        <p>When it comes to business financing, understanding the difference between business loans and working capital is crucial for making the right financial decision.</p>
        
        <h3>Business Loans</h3>
        <p>Business loans are traditional term loans that provide a lump sum amount for specific business purposes.</p>
        
        <h4>Key Features:</h4>
        <ul>
          <li>Fixed loan amount</li>
          <li>Fixed repayment tenure (1-5 years typically)</li>
          <li>Lower interest rates compared to working capital</li>
          <li>Suitable for long-term investments</li>
        </ul>
        
        <h4>Best Used For:</h4>
        <ul>
          <li>Equipment purchase</li>
          <li>Business expansion</li>
          <li>Real estate acquisition</li>
          <li>Technology upgrades</li>
        </ul>
        
        <h3>Working Capital Loans</h3>
        <p>Working capital loans are designed to meet short-term operational needs and cash flow requirements.</p>
        
        <h4>Key Features:</h4>
        <ul>
          <li>Flexible credit limit</li>
          <li>Pay interest only on utilized amount</li>
          <li>Shorter repayment cycles</li>
          <li>Quick approval and disbursement</li>
        </ul>
        
        <h4>Best Used For:</h4>
        <ul>
          <li>Inventory management</li>
          <li>Payroll expenses</li>
          <li>Seasonal business fluctuations</li>
          <li>Accounts receivable financing</li>
        </ul>
        
        <h3>Making the Right Choice</h3>
        <p>Consider these factors when deciding:</p>
        
        <table border="1" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <th style="padding: 10px; background-color: #f5f5f5;">Factor</th>
            <th style="padding: 10px; background-color: #f5f5f5;">Business Loan</th>
            <th style="padding: 10px; background-color: #f5f5f5;">Working Capital</th>
          </tr>
          <tr>
            <td style="padding: 10px;">Purpose</td>
            <td style="padding: 10px;">Long-term investments</td>
            <td style="padding: 10px;">Short-term operations</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Interest Rate</td>
            <td style="padding: 10px;">Lower (10-15%)</td>
            <td style="padding: 10px;">Higher (12-20%)</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Repayment</td>
            <td style="padding: 10px;">Fixed EMIs</td>
            <td style="padding: 10px;">Flexible</td>
          </tr>
          <tr>
            <td style="padding: 10px;">Processing Time</td>
            <td style="padding: 10px;">7-15 days</td>
            <td style="padding: 10px;">3-7 days</td>
          </tr>
        </table>
        
        <h3>Conclusion</h3>
        <p>Both business loans and working capital serve different purposes. Assess your business needs, cash flow patterns, and growth plans to make an informed decision. Consider consulting with our financial experts for personalized advice.</p>
      `,
      date: 'March 10, 2024',
      category: 'Business Loans',
      readTime: '7 min read',
      image: 'https://via.placeholder.com/800x400/0099cc/ffffff?text=Business+Financing',
      author: 'Shourya Finance Team'
    },
    {
      id: 3,
      title: 'Top 5 Documents Required for Loan Against Property',
      excerpt: 'Essential documentation checklist to ensure smooth processing of your loan against property application.',
      content: `
        <h2>Essential Documents for Loan Against Property</h2>
        <p>Loan Against Property (LAP) is a secured loan where you pledge your property as collateral. Having the right documents ready can significantly speed up your approval process.</p>
        
        <h3>1. Property Documents</h3>
        <p>These are the most critical documents for LAP approval:</p>
        
        <h4>Original Property Papers:</h4>
        <ul>
          <li><strong>Sale Deed:</strong> Original registered sale deed</li>
          <li><strong>Title Deed:</strong> Clear title documents</li>
          <li><strong>Mutation Certificate:</strong> Property mutation in your name</li>
          <li><strong>Encumbrance Certificate:</strong> For the last 15-30 years</li>
          <li><strong>Property Tax Receipts:</strong> Latest paid receipts</li>
          <li><strong>Building Approval:</strong> Sanctioned building plan</li>
        </ul>
        
        <h3>2. Income Documents</h3>
        <p>Proof of income is essential to demonstrate repayment capacity:</p>
        
        <h4>For Salaried Individuals:</h4>
        <ul>
          <li>Salary certificates</li>
          <li>Last 3 months' salary slips</li>
          <li>Form 16 for last 2 years</li>
          <li>Bank statements for last 6 months</li>
        </ul>
        
        <h4>For Self-Employed:</h4>
        <ul>
          <li>ITR for last 3 years</li>
          <li>Profit & Loss statements</li>
          <li>Balance sheet (audited)</li>
          <li>Business registration documents</li>
          <li>Bank statements for last 12 months</li>
        </ul>
        
        <h3>3. Identity and Address Proof</h3>
        <ul>
          <li><strong>Identity Proof:</strong> Aadhaar Card, PAN Card, Passport, Voter ID</li>
          <li><strong>Address Proof:</strong> Utility bills, Aadhaar Card, Passport</li>
          <li><strong>Photographs:</strong> Recent passport-size photographs</li>
        </ul>
        
        <h3>4. Property Valuation Documents</h3>
        <ul>
          <li>Property valuation report by bank-approved valuers</li>
          <li>Property insurance documents</li>
          <li>NOC from society/builder (if applicable)</li>
        </ul>
        
        <h3>5. Additional Documents</h3>
        <ul>
          <li><strong>Loan Application Form:</strong> Duly filled and signed</li>
          <li><strong>Processing Fee:</strong> Cheque for processing charges</li>
          <li><strong>Existing Loan Details:</strong> If any existing loans on the property</li>
          <li><strong>Co-applicant Documents:</strong> If applying jointly</li>
        </ul>
        
        <h3>Tips for Smooth Processing</h3>
        <ol>
          <li><strong>Organize Documents:</strong> Keep all documents in order</li>
          <li><strong>Get Copies:</strong> Make multiple copies of all documents</li>
          <li><strong>Verify Details:</strong> Ensure all information is accurate</li>
          <li><strong>Legal Check:</strong> Get property documents verified by a lawyer</li>
          <li><strong>Early Submission:</strong> Submit documents as early as possible</li>
        </ol>
        
        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Incomplete property documentation</li>
          <li>Outdated income proofs</li>
          <li>Property title disputes</li>
          <li>Incorrect property valuation</li>
          <li>Missing co-applicant documents</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Having all the required documents ready before applying for a Loan Against Property can significantly reduce processing time and increase approval chances. Our team at Shourya Finance can help you with document verification and ensure a smooth loan process.</p>
      `,
      date: 'March 5, 2024',
      category: 'Property Loans',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/800x400/003366/ffffff?text=Property+Documents',
      author: 'Shourya Finance Team'
    }
  ];

    return blogPosts.find(p => p.id === parseInt(postId));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 lg:pt-28 pb-16 lg:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog post...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 lg:pt-28 pb-16 lg:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <button 
                onClick={() => navigate('/blog')}
                className="btn-primary px-6 py-3 rounded-lg font-semibold"
              >
                Back to Blog
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white pt-24 lg:pt-28 pb-16 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => navigate('/blog')}
              className="text-primary-100 hover:text-white mb-6 inline-flex items-center transition-colors duration-300"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </button>
            
            <div className="mb-6">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-primary-100">
              <span>By {post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px',
                  color: '#374151'
                }}
              />
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <i className="fab fa-facebook-f mr-2"></i>
                    Facebook
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                    <i className="fab fa-twitter mr-2"></i>
                    Twitter
                  </button>
                  <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300">
                    <i className="fab fa-linkedin-in mr-2"></i>
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-800 mb-4">Need Financial Assistance?</h3>
                <p className="text-gray-600 mb-6">
                  Our experts are ready to help you with personalized loan solutions
                </p>
                <button 
                  onClick={() => navigate('/apply')}
                  className="btn-primary px-8 py-3 rounded-lg font-semibold mr-4"
                >
                  Apply for Loan
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="btn-secondary px-8 py-3 rounded-lg font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
