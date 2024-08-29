import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="page-content max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-lg">Name:</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-lg">Email:</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-lg">Message:</label>
          <textarea id="message" rows={4} className="w-full p-2 border border-gray-300 rounded" required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
