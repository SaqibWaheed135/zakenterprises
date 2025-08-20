import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';

 const AboutSection = () => (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About ZAK FANCY LIGHT</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ZAK FANCY LIGHT & WHOLESALE DEALER has been serving the lighting and electrical industry with dedication and excellence.
              We specialize in providing high-quality fancy lights, electrical accessories, and wholesale products to meet diverse customer needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to quality, competitive pricing, and customer satisfaction has made us a trusted name in the industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h4>
              <p className="text-gray-600">
                To provide exceptional lighting solutions and electrical products while maintaining the highest standards of quality and service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Vision</h4>
              <p className="text-gray-600">
                To be the leading wholesale dealer in the lighting industry, known for innovation, reliability, and customer-centric approach.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Quality Assurance</h4>
                  <p className="text-gray-600">All products undergo strict quality checks</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Competitive Pricing</h4>
                  <p className="text-gray-600">Best wholesale rates in the market</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Support</h4>
                  <p className="text-gray-600">Professional customer service team</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Timely Delivery</h4>
                  <p className="text-gray-600">Fast and reliable order processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );