import { motion, AnimatePresence } from 'framer-motion';
import {
  Apple, Award, Package, Factory, Droplets, Leaf, Recycle, ShieldCheck, Ruler, Home, Layout, Briefcase, Building2, ThermometerSun, BugOff, Smile, Flame, Sun, Hammer, FileCheck2, BadgeCheck, Wrench, ScissorsSquareDashedBottom, FileText, PackageSearch, Mail, DownloadCloud, Phone, Download,
  Heart, Utensils, Sprout, ShoppingBag, BriefcaseBusiness, Coffee, Store, Hospital, School, Box, Carrot, WheatOff, HandCoins, CheckCircle, PackageOpen, Tag, Thermometer, CalendarCheck, Palmtree, Warehouse, Users, Search, ShoppingCart, Lightbulb, Factory as FactoryIcon,
  Tag as PriceTag, List, Scale, Gift, BookText, UserPlus,
  // Additional icons for FMCG content
  Cookie, Grape, Milk, Egg, Nut,
  Vegan, Wheat,
  BoxSelect, Truck, Clock, Printer,
  Sparkles, Layers,
  PencilRuler, DollarSign, Puzzle,
  Info, HelpCircle,
  Dumbbell
} from 'lucide-react';
import { useState } from "react";
import '../../app/globals.css'; // Assuming this path is correct for your project structure

export default function FMCGProductsPage() {
  // FAQ data
  const faqs = [
    {
      question: "Can I order a mixed sample box?",
      answer: "Yes! We offer curated trial packs for retailers.",
    },
    {
      question: "Are the snacks free from allergens?",
      answer: "Many are nut-free, dairy-free and gluten-free (see label).",
    },
    {
      question: "What’s the shelf life?",
      answer: "Typically 6-12 months depending on the product.",
    },
    {
      question: "Can I white-label under my brand?",
      answer: "Absolutely. We assist with design and compliance.",
    },
    {
      question: "Do you ship across Canada?",
      answer: "Yes, with both LTL and courier options available.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  return (
    <div className="px-2 sm:px-4 md:px-6 py-8 md:py-10 max-w-full md:max-w-6xl mx-auto space-y-8 md:space-y-12 text-gray-800 ">

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-3xl md:text-5xl font-bold text-center leading-tight"
        >
          Powering Global FMCG Brands <br />
          From Shelves to Screens to Shopping Carts.
        </motion.h1>
      </section>

      {/* Sourcing & Curation Process */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Sourcing & Curation Process
        </h2>
        <p className="text-lg text-gray-700 max-w-auto mx-left leading-relaxed ">
          We work closely with retailers, e-com platformers, manufactures and brands to ensure every product meets clena-label, global standards.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200 col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Cookie className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Sugar-Conscious, Allergen-Aware, & Child-Safe
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Mindfully made for everyone, with attention to dietary needs and children's safety.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200 ">
            <div className="flex items-center gap-3 mb-3">
              <FactoryIcon className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Locally & Globally Curated from Certified Facilities
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              We partner with trusted, certified facilities worldwide to bring you the best quality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <FileCheck2 className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Third-Party Lab Tested (where applicable)
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Ensuring safety and quality, our products undergo rigorous third-party testing.
            </p>
          </div>

          
        </div>
      </section>

      {/* Applications */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <p className="text-lg text-gray-700 max-w-3xl mx-left leading-relaxed ">
          Our FMCG products are ideal for:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Store className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Grocery Stores & Food Chains
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Expand your offerings with our diverse range of snacks and groceries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <BriefcaseBusiness className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Corporate Wellness Programs
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Provide healthy snack options for employees to boost well-being.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <School className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Schools, Cafes & Hospitals
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Nutritious and safe snacks for educational and healthcare environments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200 col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingCart className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Retailers, Distributors and Suppliers
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Offer popular, wide variety choices to your customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200 ">
            <div className="flex items-center gap-3 mb-3">
              <Dumbbell className="w-6 h-6 text-rose-600" /> {/* Changed from Building2 to Dumbbell for fitness */}
              <h3 className="text-xl font-bold text-gray-800">
                Gym & Fitness Chains
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Fuel workouts and recovery with our functional and healthy snacks.
            </p>
          </div>
        </div>
        
      </section>

      {/* Private Labeling & White Labeling */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Private Labeling & White Labeling
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-left leading-relaxed">
          Whether you’re launching a brand or expanding a store line.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <BoxSelect className="text-purple-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Products Available in Bulk or Retail-Ready Packs
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Flexible packaging options to suit your business model.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <PencilRuler className="text-blue-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Custom Branding and Label Design Support
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our team assists in creating a unique look for your brand.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="text-red-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Low MOQ for Specialty Items
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Accessible minimum order quantities for niche and unique products.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}