import React from 'react';

const SubscriptionSection: React.FC = () => {
  return (
    <section className="subscription-section bg-black text-white py-12 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Updated!</h2>
        <p className="mb-8 text-lg">
          Subscribe to our newsletter to get the latest updates on interview tips, new features, and more.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-grow p-3 rounded border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded text-white transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscriptionSection;
