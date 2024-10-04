import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const PlanSection: React.FC = () => {
  const plans = [
    {
      title: 'Free Plan',
      description: 'A great starting point for individuals new to interview preparation.',
      price: 'Free',
      features: [
        'Limited access to interview questions',
        'Basic resume builder',
        'Community support',
      ],
      buttonText: 'Sign Up Free',
      buttonColor: 'bg-gray-500',
      textColor: 'text-gray-700',
      link: '/register',
      badge: '',
    },
    {
      title: 'Basic Plan',
      description: 'Ideal for those who want to get serious about their interview prep.',
      price: '₹99/month',
      features: [
        'Access to basic interview questions',
        'Resume builder',
        'Email support',
        'Practice quizzes',
      ],
      buttonText: 'Get Started',
      buttonColor: 'bg-blue-600',
      textColor: 'text-gray-700',
      link: '/register',
      badge: '',
    },
    {
      title: 'Standard Plan',
      description: 'Our most popular plan with advanced features for comprehensive preparation.',
      price: '₹199/month',
      features: [
        'Access to all interview questions',
        'Advanced resume builder',
        'Priority email support',
        'Mock interview sessions',
        'Video tutorials',
        'Access to a private community',
      ],
      buttonText: 'Upgrade Now',
      buttonColor: 'bg-blue-700',
      textColor: 'text-gray-700',
      link: '/register',
      badge: 'Most Popular',
    },
    {
      title: 'Premium Plan',
      description: 'For those who want the ultimate interview preparation experience.',
      price: '₹499/month',
      features: [
        'Access to all interview questions',
        'Advanced resume builder',
        'Priority email support',
        'Mock interview sessions',
        'Advanced analytics and insights',
        'Dedicated account manager',
        '24/7 support',
      ],
      buttonText: 'Go Premium',
      buttonColor: 'bg-blue-800',
      textColor: 'text-gray-700',
      link: '/register',
      badge: '',
    },
  ];

  return (
    <section className="plan-section bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Choose Your Plan</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="plan-card bg-white shadow-lg rounded-lg p-8 text-center max-w-xs flex flex-col items-center relative"
            >
              {plan.badge && (
                <span className="absolute top-0 right-0 bg-yellow-500 text-white text-sm font-bold py-1 px-3 rounded-bl-lg">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className={`text-3xl font-bold ${plan.textColor} mb-4`}>{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <Tooltip title={`More details about ${feature}`} arrow>
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </Tooltip>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={plan.link}>
                <button
                  className={`py-3 px-6 rounded-lg text-white transition ${plan.buttonColor} hover:${plan.buttonColor === 'bg-gray-500' ? 'bg-gray-600' : 'bg-blue-900'}`}
                >
                  {plan.buttonText}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center text-white mb-6">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 text-white text-center">
              <thead>
                <tr>
                  <th className="py-3 px-4"></th>
                  {plans.map((plan, index) => (
                    <th key={index} className="py-3 px-4">{plan.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4">Price</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="py-3 px-4">{plan.price}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4">Access to Interview Questions</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="py-3 px-4">{plan.features.includes('Access to all interview questions') ? '✓' : plan.features.includes('Access to basic interview questions') ? '✓' : '✗'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4">Resume Builder</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="py-3 px-4">{plan.features.includes('Advanced resume builder') ? '✓' : plan.features.includes('Basic resume builder') ? '✓' : '✗'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4">Support</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="py-3 px-4">{plan.features.includes('Priority email support') ? 'Priority' : plan.features.includes('Email support') ? 'Email' : 'Community'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4">Mock Interview Sessions</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="py-3 px-4">{plan.features.includes('Mock interview sessions') ? '✓' : '✗'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-4">Analytics & Insights</td>
                  {plans.map((plan, index) => (
                    <td key={index} className="py-3 px-4">{plan.features.includes('Advanced analytics and insights') ? '✓' : '✗'}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
