import { Shield, Eye, Lock, PlayCircle, AlertTriangle, UserCheck } from "lucide-react";

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
          {/* Information We Collect */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Eye className="w-5 h-5 text-green-500" />
              <span className="text-black">Information We Collect</span>
            </h4>
            <p className="text-gray-700 mb-4">
              We collect information to provide better services to our users. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Personal details you provide (such as name, email, or phone number).</li>
              <li>Account activity such as ads watched, points earned, and dashboard usage.</li>
              <li>Content you upload (videos, reels, comments, reports).</li>
              <li>Location data (only if you grant permission).</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Lock className="w-5 h-5 text-blue-500" />
              <span className="text-black">How We Use Your Information</span>
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Provide core features like earning points from watching ads.</li>
              <li>Approve and manage uploaded videos before they appear in the app.</li>
              <li>Improve app performance, security, and user experience.</li>
              <li>Notify you about important updates or account activity.</li>
              <li>Prevent fraud and misuse of our platform.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </div>

          {/* User-Generated Content */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <PlayCircle className="w-5 h-5 text-purple-500" />
              <span className="text-black">User-Generated Content</span>
            </h4>
            <p className="text-gray-700">
              Videos and reels uploaded by users are reviewed and approved by our admin team.
              You are responsible for the content you upload. Content that violates our
              policies may be removed. Users can also report inappropriate content.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-black">Data Security</h4>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your information against
              unauthorized access, alteration, disclosure, or destruction. However, no system
              is 100% secure.
            </p>
          </div>

          {/* Information Sharing */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-black">Information Sharing</h4>
            <p className="text-gray-700">
              We do not sell or trade your personal information. We may share limited data
              with trusted third-party service providers (such as analytics, hosting, or ad
              networks) or if required by law.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-black">Your Rights</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Access and review your personal information.</li>
              <li>Request correction of inaccurate details.</li>
              <li>Request deletion of your data.</li>
              <li>Opt-out of marketing or promotional messages.</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-black">Contact Us</h4>
            <p className="text-gray-700">If you have questions about this Privacy Policy, please contact us at:</p>
            <div className="mt-2 text-gray-600">
              <p>Email: zakenterprises135@gmail.com</p>
              <p>Phone: +92-306-0000080</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Last updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              . We may update this Privacy Policy from time to time. Changes will be posted
              on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacySection;
