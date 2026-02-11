import React from 'react';
import { Facebook, Youtube, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Temple', href: '#' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Donation', href: '#donation' },
    { name: 'Aarti Timings', href: '#aarti' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Refund Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Temple Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-temple-red flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shri Mandir</h3>
                <p className="text-xs text-gray-300">Since 1850</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              A sacred space dedicated to spiritual growth, community service, and preserving ancient traditions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-temple-red transition-colors duration-300 flex items-center justify-center">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-red-600 transition-colors duration-300 flex items-center justify-center">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-temple-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-temple-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to receive spiritual messages and temple updates
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-temple-gold focus:border-transparent"
              />
              <button className="w-full py-3 bg-temple-gold text-white font-semibold rounded-lg hover:bg-temple-gold/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Shri Mandir Temple. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 text-center md:text-left">
              This is a demo website created for educational purposes.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Made with <Heart className="inline w-4 h-4 text-red-400" /> for the community
            </p>
            <p className="text-sm text-gray-500">
              GST No: 09AAECS1234F1Z1 | Trust Reg No: 123/2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;