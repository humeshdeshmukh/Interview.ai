import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Button, Typography, TextField, Box } from '@mui/material';
import './contactSection.css';


const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box className="flex flex-col md:flex-row bg-black p-10 rounded-lg shadow-lg">
      {/* Left Side: Contact Form */}
      <Box className="md:w-1/2 p-5">
        <Typography variant="h4" className="text-white mb-6">Contact Us</Typography>
        <form onSubmit={handleSubmit} className="bg-black p-8 rounded-lg shadow-md border border-gray-700">
          <div className="mb-4">
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              className="bg-gray-900"
              InputLabelProps={{ className: 'text-gray-300' }}
              InputProps={{ className: 'text-white' }}
              style={{ borderColor: '#444444' }} // Optional: Add border color
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              className="bg-gray-900"
              InputLabelProps={{ className: 'text-gray-300' }}
              InputProps={{ className: 'text-white' }}
              style={{ borderColor: '#444444' }} // Optional: Add border color
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
              fullWidth
              className="bg-gray-900"
              InputLabelProps={{ className: 'text-gray-300' }}
              InputProps={{ className: 'text-white' }}
              style={{ borderColor: '#444444' }} // Optional: Add border color
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md transition duration-300 transform hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </Box>

      {/* Right Side: Contact Info and Icons */}
      <Box className="md:w-1/2 p-5 flex flex-col justify-center">
        <Typography variant="h5" className="text-white mb-4">Get in Touch</Typography>
        <Typography className="text-gray-400 mb-4">
          We’d love to hear from you! Whether you have questions about our services, need support, or just want to say hi, feel free to reach out using the form.
        </Typography>
        <div className="flex items-start mb-4 hover:opacity-80 transition duration-200">
          <FaPhoneAlt className="text-blue-400 text-2xl mr-3 transition duration-300 transform hover:scale-125" />
          <div>
            <Typography variant="h6" className="text-white">Phone</Typography>
            <Typography className="text-gray-400">+1 (555) 123-4567</Typography>
          </div>
        </div>
        <div className="flex items-start mb-4 hover:opacity-80 transition duration-200">
          <FaEnvelope className="text-blue-400 text-2xl mr-3 transition duration-300 transform hover:scale-125" />
          <div>
            <Typography variant="h6" className="text-white">Email</Typography>
            <Typography className="text-gray-400">support@example.com</Typography>
          </div>
        </div>
        <div className="flex items-start mb-4 hover:opacity-80 transition duration-200">
          <FaMapMarkerAlt className="text-blue-400 text-2xl mr-3 transition duration-300 transform hover:scale-125" />
          <div>
            <Typography variant="h6" className="text-white">Address</Typography>
            <Typography className="text-gray-400">123 Main St, Anytown, USA</Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default ContactSection;
