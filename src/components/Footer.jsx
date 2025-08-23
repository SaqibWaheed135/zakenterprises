import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-gray-900" />
              </div>
              <div>
                <h3 className="font-bold">ZAK FANCY LIGHT</h3>
                <p className="text-xs text-gray-400">& WHOLESALE DEALER</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for quality lighting solutions and wholesale electrical products.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/about-us" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Link to="/support" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Customer Support
              </Link>
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+92-306-0000080</span>
              </p>
              <p className="text-gray-400 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>zakenterprises135@gmail.com</span>
              </p>
              <p className="text-gray-400 flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rawalpindi, Punjab, Pakistan</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ZAK FANCY LIGHT & WHOLESALE DEALER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;