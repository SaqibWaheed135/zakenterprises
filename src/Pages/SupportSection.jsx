import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';
 const SupportSection = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Customer Support</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Phone className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-semibold">We're Here to Help</h3>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Our dedicated support team is ready to assist you with any questions or concerns about our products and services.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span>Phone Support</span>
                  </h4>
                  <p className="text-gray-700 mb-2">Call us directly for immediate assistance</p>
                  <p className="font-semibold text-blue-600">+92-306-0000080</p>
                  <p className="text-sm text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-green-500" />
                    <span>Email Support</span>
                  </h4>
                  <p className="text-gray-700 mb-2">Send us detailed queries</p>
                  <p className="font-semibold text-green-600">zakenterprises135@gmail.com
                  </p>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    <span>Visit Our Store</span>
                  </h4>
                  <p className="text-gray-700 mb-2">See products in person</p>
                  <p className="text-sm text-gray-600">Shop No.57, 1st Floor, Liberty Plaza,
                    Liaquat Road, Opposite Gordan College,
                    Rawalpindi, Punjab
                    Pakistan</p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-yellow-500" />
                    <span>Business Hours</span>
                  </h4>
                  <div className="text-gray-700 space-y-1">
                    <p>Mon – Thu, Sat & Sun: 9:00 AM – 8:00 PM</p>
                    <p>Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-lg mb-2">Do you provide warranty on products?</h4>
                <p className="text-gray-700">Yes, all our products come with manufacturer warranty. Warranty period varies by product type and brand.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-lg mb-2">What are your wholesale pricing terms?</h4>
                <p className="text-gray-700">We offer competitive wholesale rates for bulk orders. Contact us directly for wholesale pricing and minimum order quantities.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-lg mb-2">Do you provide installation services?</h4>
                <p className="text-gray-700">We can recommend certified electricians and installation professionals in your area. Installation guidance is also available.</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-lg mb-2">What payment methods do you accept?</h4>
                <p className="text-gray-700">We accept cash, bank transfers, and mobile payments. Specific payment options are available through our mobile app.</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">How can I track my order?</h4>
                <p className="text-gray-700">Order tracking information is available through our mobile app and via SMS/email notifications once your order is processed.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Still Need Help?</h3>
            <p className="text-lg mb-6">Our customer support team is always ready to assist you</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now: +92-306-0000080
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  export default SupportSection;