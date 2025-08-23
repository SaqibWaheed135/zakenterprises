import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';
  const TermsSection = () => (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Terms of Service</h2>

        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-semibold">Terms & Conditions</h3>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Acceptance of Terms</h4>
              <p className="text-gray-700">
                By accessing and using the ZAK FANCY LIGHT mobile application and services, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Use of Services</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>You must be at least 18 years old to use our services</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to provide accurate and complete information</li>
                <li>You will not use our services for any unlawful purposes</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Orders and Payment</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>All orders are subject to product availability</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment must be made in full before delivery</li>
                <li>We reserve the right to refuse or cancel orders</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Product Information</h4>
              <p className="text-gray-700">
                We strive to provide accurate product information. However, we do not warrant that product descriptions,
                pricing, or other content is accurate, complete, reliable, or error-free.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Limitation of Liability</h4>
              <p className="text-gray-700">
                ZAK FANCY LIGHT shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Intellectual Property</h4>
              <p className="text-gray-700">
                All content, trademarks, and intellectual property on our platform are owned by ZAK FANCY LIGHT or our licensors
                and are protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Modifications</h4>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
                Your continued use of the service constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Governing Law</h4>
              <p className="text-gray-700">
                These terms shall be governed by and construed in accordance with the laws of Pakistan,
                without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-sm text-gray-700">
                <strong>Questions?</strong> If you have any questions about these Terms of Service,
                please contact us at zakenterprises135@gmail.com
                or call +92-306-0000080
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    export default TermsSection;