import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <img src="/logo.svg" alt="Bootstrap Brain Logo" className="w-32 mb-4" />
          <p className="text-sm mb-4">
            Subscribe to Our Newsletter. Don’t miss out on the opportunity to be part of something great. Subscribe now and let the journey begin!
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-600 rounded-l px-4 py-2 flex-1 focus:outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/values" className="hover:text-blue-400 transition">Our Values</a></li>
            <li><a href="/sustainability" className="hover:text-blue-400 transition">Sustainability Efforts</a></li>
            <li><a href="/csr" className="hover:text-blue-400 transition">CSR Initiatives</a></li>
            <li><a href="/environment" className="hover:text-blue-400 transition">Environmental Impact</a></li>
            <li><a href="/community" className="hover:text-blue-400 transition">Community Outreach</a></li>
            <li><a href="/diversity" className="hover:text-blue-400 transition">Diversity & Inclusion</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/shipping" className="hover:text-blue-400 transition">Shipping & Returns</a></li>
            <li><a href="/refund" className="hover:text-blue-400 transition">Refund Policy</a></li>
            <li><a href="/warranty" className="hover:text-blue-400 transition">Warranty Information</a></li>
            <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Practices</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2024 All Rights Reserved. Built by BootstrapBrain 💙</p>
        <div className="mt-2 space-x-4">
          <a href="/shipping" className="hover:text-blue-400 transition">Shipping</a>
          <a href="/refund" className="hover:text-blue-400 transition">Refund</a>
          <a href="/warranty" className="hover:text-blue-400 transition">Warranty</a>
          <a href="/privacy" className="hover:text-blue-400 transition">Privacy</a>
          <a href="/security" className="hover:text-blue-400 transition">Security</a>
        </div>
      </div>
    </footer>
  );
};

