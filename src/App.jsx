import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ShoppingBag, Users, Award, Shield, FileText, Eye, Lock } from 'lucide-react';



const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    support: 'Support'
  };

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

  const ContactSection = () => (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+92-306-0000080</p>
                  <p className="text-sm text-gray-500">Call us for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">zakenterprises135@gmail.com</p>
                  <p className="text-sm text-gray-500">Send us your queries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    Shop No.57, 1st Floor, Liberty Plaza,
                    Liaquat Road, Opposite Gordan College,
                    Rawalpindi, Punjab
                    Pakistan
                  </p>
                  <p className="text-sm text-gray-500">Visit our showroom</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Business Hours</h4>
                  <p className="text-gray-600">Mon – Thu, Sat & Sun: 9:00 AM – 8:00 PM | Fri: Closed</p>

                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const PrivacySection = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Privacy Policy</h2>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-semibold text-black">Your Privacy Matters</h3>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Eye className="w-5 h-5 text-green-500" />
                <span className='text-black'>Information We Collect</span>
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
                <span className='text-black'>How We Use Your Information</span>
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
              <h4 className="text-xl font-semibold mb-4 text-black">Data Security</h4>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. Your data is encrypted and stored securely.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Information Sharing</h4>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                except as described in this policy or when required by law.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Your Rights</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Contact Us</h4>
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

  const TermsSection = () => (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Terms of Service</h2>

        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-8 h-8 text-blue-500" />
            <h3 className="text-2xl font-semibold text-black">Terms & Conditions</h3>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Acceptance of Terms</h4>
              <p className="text-gray-700">
                By accessing and using the ZAK FANCY LIGHT mobile application and services, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Use of Services</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>You must be at least 18 years old to use our services</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to provide accurate and complete information</li>
                <li>You will not use our services for any unlawful purposes</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Orders and Payment</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>All orders are subject to product availability</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment must be made in full before delivery</li>
                <li>We reserve the right to refuse or cancel orders</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Product Information</h4>
              <p className="text-gray-700">
                We strive to provide accurate product information. However, we do not warrant that product descriptions,
                pricing, or other content is accurate, complete, reliable, or error-free.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Limitation of Liability</h4>
              <p className="text-gray-700">
                ZAK FANCY LIGHT shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Intellectual Property</h4>
              <p className="text-gray-700">
                All content, trademarks, and intellectual property on our platform are owned by ZAK FANCY LIGHT or our licensors
                and are protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Modifications</h4>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
                Your continued use of the service constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-black">Governing Law</h4>
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

  const SupportSection = () => (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Customer Support</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <Phone className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-semibold text-black">We're Here to Help</h3>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Our dedicated support team is ready to assist you with any questions or concerns about our products and services.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className='text-black'>Phone Support</span>
                  </h4>
                  <p className="text-gray-700 mb-2">Call us directly for immediate assistance</p>
                  <p className="font-semibold text-blue-600">+92-306-0000080</p>
                  <p className="text-sm text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-green-500" />
                    <span className='text-black'>Email Support</span>
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
                    <span className='text-black'>Visit Our Store</span>
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
                    <span className='text-black'>Business Hours</span>
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

  const Footer = () => (
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
              <button
                onClick={() => setActiveSection('home')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => setActiveSection('services')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Services
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <button
                onClick={() => setActiveSection('support')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Customer Support
              </button>
              <button
                onClick={() => setActiveSection('privacy')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveSection('terms')}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </button>
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
                <span>zakenterprises135@gmail.com
                </span>
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

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HomeSection/>
      case 'about': return <AboutSection/>;
      case 'services': return <ServicesSection />;
      case 'contact': return <ContactSection />;
      case 'privacy': return <PrivacySection />;
      case 'terms': return <TermsSection />;
      case 'support': return <SupportSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default App;