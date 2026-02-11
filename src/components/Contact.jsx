import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: ['Shri Mandir Temple', 'Temple Street, Varanasi', 'Uttar Pradesh - 221001'],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 98765 43211', 'Emergency: +91 98765 43212'],
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Address',
      details: ['info@shrimandir.com', 'donation@shrimandir.com', 'puja@shrimandir.com'],
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      icon: <Clock size={24} />,
      title: 'Office Hours',
      details: ['Monday - Sunday: 8 AM - 8 PM', 'Puja Office: 9 AM - 6 PM', 'Donation Counter: 24/7'],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Get in Touch</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`${info.bg} p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className={`${info.color} mb-4`}>
                      {info.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-3">{info.title}</h4>
                    <ul className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-600">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="text-blue-600" size={32} />
                    </div>
                    <p className="text-gray-700 font-medium">Temple Location Map</p>
                    <p className="text-sm text-gray-500">Varanasi, Uttar Pradesh</p>
                  </div>
                </div>
                <div className="bg-white p-4">
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="temple-card">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Send Your Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Donation Related</option>
                    <option>Puja Booking</option>
                    <option>Service Order</option>
                    <option>Volunteer Program</option>
                    <option>Complaint/Suggestion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-temple-gold to-amber-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                <h4 className="font-bold text-red-700 mb-2 flex items-center">
                  <Phone className="mr-2" size={20} />
                  Emergency Contact
                </h4>
                <p className="text-red-600 mb-3">For medical emergencies or immediate assistance</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-700">+91 98765 43212</div>
                  <p className="text-sm text-red-600">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;