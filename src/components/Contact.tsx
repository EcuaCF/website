"use client";

import { useState } from 'react';
import SlideUp from './SlideUp';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <SlideUp>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </SlideUp>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your phone number"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Services Information">Services Information</option>
                <option value="Request a Quote">Request a Quote</option>
                <option value="Partnership Opportunities">Partnership Opportunities</option>
                <option value="Technical Support">Technical Support</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-1/4 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
        <SlideUp>
          {/* Right Column - Info Boxes */}
          <div className="space-y-6">
            {/* Office Location Box */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:border-blue-700">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">Office Location</h2>
              <p className="text-gray-600">
                Edificio SOHO Galaxy<br />
                Av. Eloy Alfaro N-33-55 y Suiza Oficina 202<br />
                Quito, Ecuador 170518
              </p>
            </div>

            {/* Contact Information Box */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:border-blue-700">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">Contact Information</h2>
              <p className="text-gray-600">
                <strong>Email:</strong> sales@ecuacf.comm<br />
                <strong>Phone:</strong> +59 (399) 885-2466
              </p>
            </div>

            {/* Business Hours Box */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:border-blue-700">
              <h2 className="text-xl font-semibold text-blue-600 mb-3">Business Hours</h2>
              <p className="text-gray-600">
                <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (ECT)<br />
                <strong>Saturday - Sunday:</strong> Closed
              </p>
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
};

export default ContactUs;