import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';
 const PrivacySection = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Privacy Policy</h2>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-semibold">Your Privacy Matters</h3>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Eye className="w-5 h-5 text-green-500" />
                <span>Information We Collect</span>
              </h4>
              <p className="text-gray-700 mb-4">We collect information to provide better services to our users. This includes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Personal information you provide (name, email, phone number)</li>
                <li>Order and transaction information</li>
                <li>Device and usage information when using our mobile app</li>
                <li>Location information (with your permission)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Lock className="w-5 h-5 text-blue-500" />
                <span>How We Use Your Information</span>
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send important notifications about your account or orders</li>
                <li>Improve our services and mobile application</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Data Security</h4>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. Your data is encrypted and stored securely.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Information Sharing</h4>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                except as described in this policy or when required by law.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Your Rights</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-2 text-gray-600">
                <p>Email: zakenterprises135@gmail.com</p>
                <p>Phone: +92-306-0000080</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Last updated:</strong> This Privacy Policy was last updated on{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                . We may update this policy from time to time. We will notify you of any
                changes by posting the new policy on this page.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );