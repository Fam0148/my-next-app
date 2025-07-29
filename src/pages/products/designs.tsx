import { motion, AnimatePresence } from 'framer-motion';
import {
  Shirt, Factory, GitPullRequest, Ruler, Users, Package, Box, Tag, Award,
  Globe, Search, Handshake, DollarSign, BoxSelect, Palette, Megaphone,
  Truck, CheckCircle, Flame, Sun, Hammer, FileText, Download, Phone,
  Sparkles, Leaf, Recycle, BadgeCheck, Wrench, ScissorsSquareDashedBottom,
  Building2, Home, Layout, Briefcase, Droplets, Smile, ThermometerSun, BugOff, FileCheck2,
  BookText, ShoppingBag, UserPlus
} from 'lucide-react';
import { useState } from "react";
import '../../app/globals.css'; // Assuming this path is correct for your project structure

export default function TShirtManufacturingPage() {
  const blogTopics = [
    { title: "Best T-Shirt Styles for Canadian Streetwear" },
    { title: "Starting a Clothing Line on a Budget" },
    { title: "Canada's Most Popular Fabrics for Activewear" },
    { title: "Ethical Apparel Sourcing from India vs Bangladesh" },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]); // Keeping for potential future FAQs if added

  return (
    <div className="px-2 sm:px-4 md:px-6 py-8 md:py-10 max-w-full md:max-w-6xl mx-auto space-y-8 md:space-y-12 text-gray-800 ">

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-3xl md:text-4xl font-bold text-center leading-tight"
        >
          From Threads to Trends <br />
          Smart Apparel Manufacturing Starts Here.
        </motion.h1>
      </section>

      {/* About Section */}
      <section className="text-center py-8 px-4 md:px-8 space-y-4">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
        We connect clients with international manufacturing and sourcing solutions to bring your apparel brand to life.
        </p>
        
      </section>

      {/* Fabrics Table */}
      <section className="space-y-4 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold">Fabrics We Supply</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-left leading-relaxed">
          We supply a curated range of sustainable and high-performance fabrics:
        </p>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-200 text-xs sm:text-sm text-left rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Fabric Type</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Organic Cotton</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Soft, breathable, eco-certified</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Recycled Polyester</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Sustainable alternative to virgin poly</td>
              </tr>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Cotton-Lycra Blend</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Flexible, stretch-friendly</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">OEKO-TEX (select)</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Various fabric types meeting OEKO-TEX standards</td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </section>

 {/* Services Section */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Shirt className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Private Label Manufacturing
              </h3>
            </div>
            <ul className="text-base text-gray-600 leading-relaxed list-disc list-inside space-y-1">
              <li>Custom logo printing (DTG, screen, heat transfer)</li>
              <li>Neck labels, tags, packaging & barcoding</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <GitPullRequest className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Fabric & Apparel Sourcing
              </h3>
            </div>
            <ul className="text-base text-gray-600 leading-relaxed list-disc list-inside space-y-1">
              <li>Direct mill sourcing (India, Bangladesh, Turkey)</li>
              <li>Fabric sampling, lab testing, GSM & shrinkage control</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Compliance & Quality Control
              </h3>
            </div>
            <ul className="text-base text-gray-600 leading-relaxed list-disc list-inside space-y-1">
              <li>ISO certified facilities</li>
              <li>Color fastness, shrinkage, and wash testing on request</li>
            </ul>
          </div>
        </div>
        
      
      </section>

      {/* Products Table */}
      <section className="space-y-4 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold">Products We Manufacture & Supply</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-left leading-relaxed">
          We manufacture and supply a wide range of ready-to-brand and custom-designed apparel:
        </p>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-200 text-xs sm:text-sm text-left rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Product</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Fabric Options</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Target Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Merch, Promotions (Oversized Tees, S-XXL)</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Cotton-Lycra, Modal</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Streetwear, Fashion</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Athleisure, Gymwear</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Performance blends</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Activewear, Fitness</td>
              </tr>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Kids wear (2-12 yrs)</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Cotton, Organic</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Retail, School Uniforms (with stock images)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Custom Apparel</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">All Available Fabrics</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Private Labels, Events</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </section>

      {/* People We Serve Section */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          People We Serve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Clothing Retailers & Boutique Fashion Brands
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Elevate your collections with our high-quality, custom apparel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Online Apparel Vendors and Dropshippers
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Streamline your supply chain with reliable manufacturing partners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Corporate Uniform Vendors & School Wear Suppliers
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Durable and customizable options for bulk uniform orders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Megaphone className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Gym Chains, Merchandisers, and Influencers
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Create branded merchandise that resonates with your audience.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Benefits of Partnering With Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Handshake className="text-blue-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Low Minimum Order Quantities (MOQ)
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Start small and scale up, perfect for new or growing brands.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <UserPlus className="text-indigo-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Dedicated Account Management
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Receive personalized support throughout your project.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Truck className="text-green-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                B2B Pricing, Logistics & Freight Assistance
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Competitive pricing and seamless delivery solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Palette className="text-rose-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Branding, Packaging, and Catalog Design
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Comprehensive support to build your brand identity.
            </p>
          </div>
        </div>
        
      </section>

    </div>
  );
}