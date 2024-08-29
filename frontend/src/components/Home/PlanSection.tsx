import React from 'react';
import { Link } from 'react-router-dom';
import './PlanSection.css';


const PlanSection: React.FC = () => {
  const plans = [
    {
      title: 'Free Plan',
      price: 'Free',
      features: [
        'Limited access to interview questions',
        'Basic resume builder',
        'Community support',
      ],
      buttonText: 'Sign Up Free',
      buttonColor: 'bg-gray-500', // Color for free plan
      textColor: 'text-gray-700', // Text color for free plan
      link: '/register', // Link to signup page
    },
    {
      title: 'Basic Plan',
      price: '$9.99/month',
      features: [
        'Access to basic interview questions',
        'Resume builder',
        'Email support',
      ],
      buttonText: 'Get Started',
      buttonColor: 'bg-blue-600',
      textColor: 'text-gray-700',
      link: '/register', // Link to signup page
    },
    {
      title: 'Pro Plan',
      price: '$19.99/month',
      features: [
        'Access to all interview questions',
        'Advanced resume builder',
        'Priority email support',
        'Mock interview sessions',
      ],
      buttonText: 'Upgrade Now',
      buttonColor: 'bg-blue-700',
      textColor: 'text-gray-700',
      link: '/register', // Link to signup page
    },
    {
      title: 'Enterprise Plan',
      price: '$49.99/month',
      features: [
        'Custom interview questions',
        'Dedicated account manager',
        '24/7 support',
        'Advanced analytics and insights',
      ],
      buttonText: 'Contact Us',
      buttonColor: 'bg-blue-800',
      textColor: 'text-gray-700',
      link: '/contact', // Link to contact page
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
              className="plan-card bg-white shadow-lg rounded-lg p-8 text-center max-w-xs flex flex-col items-center"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className={`text-3xl font-bold ${plan.textColor} mb-4`}>{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
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
      </div>
    </section>
  );
};

export default PlanSection;
