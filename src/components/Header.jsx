import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';
const Header = () => (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white shadow-lg sticky top-0 z-50 mg-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              {/* Title smaller */}
              <h1 className="text-base font-bold">ZAK FANCY LIGHT</h1>
              <p className="text-xs text-blue-200">& WHOLESALE DEALER</p>
            </div>
          </div>

          {/* Navbar text smaller */}
          <nav className="hidden md:flex space-x-4">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`text-sm hover:text-yellow-300 transition-colors ${activeSection === key ? 'text-yellow-300 border-b-2 border-yellow-300' : ''
                  }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSection(key);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-sm hover:text-yellow-300 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );