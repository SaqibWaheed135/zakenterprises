import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';

  const ServicesSection = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fancy Lighting</h3>
            <p className="text-gray-600">Premium decorative lights, chandeliers, pendant lights, and modern lighting fixtures</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Wholesale Distribution</h3>
            <p className="text-gray-600">Bulk supply of electrical products to retailers, contractors, and businesses</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Electrical Accessories</h3>
            <p className="text-gray-600">Complete range of switches, sockets, wires, and electrical components</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
            <p className="text-gray-600">Certified products from reputable manufacturers with warranty support</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Quick order processing and reliable delivery across the region</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
            <p className="text-gray-600">Dedicated support team for product queries and after-sales service</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Product Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Lighting Products</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• LED Lights & Fixtures</li>
                <li>• Chandeliers & Pendant Lights</li>
                <li>• Ceiling Fans with Lights</li>
                <li>• Outdoor Lighting</li>
                <li>• Decorative Lights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Electrical Accessories</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Switches & Sockets</li>
                <li>• Electrical Wires & Cables</li>
                <li>• Circuit Breakers</li>
                <li>• Electrical Panels</li>
                <li>• Installation Accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );