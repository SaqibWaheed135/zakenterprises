import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';
const HomeSection = () => (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-6">ZAK FANCY LIGHT</h2>
          <h2 className="text-2xl mb-8 text-blue-100">& WHOLESALE DEALER</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your premier destination for quality lighting solutions and wholesale electrical products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('services')}
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Explore Services
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose ZAK FANCY LIGHT?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">High-quality lighting products and electrical components from trusted manufacturers</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Wholesale Pricing</h3>
              <p className="text-gray-600">Competitive wholesale rates for retailers, contractors, and bulk buyers</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <ShoppingBag className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Wide Selection</h3>
              <p className="text-gray-600">Extensive range of fancy lights, electrical accessories, and wholesale items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Download Our Mobile App</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete catalog, place orders, and manage your account conveniently from your mobile device
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">ZAK FANCY LIGHT App</h3>
            <p className="text-gray-600 mb-6">Available on Google Play Store</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Download from Play Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
  export default HomeSection;