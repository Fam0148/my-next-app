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
          Healthy FMCG Product Distribution <br />
          Natural Organic & Functional Snacks for the Conscious Consumer.
        </motion.h1>
      </section>

      {/* Introduction */}
      <section className="text-center py-8 px-4 md:px-8">
        <h2 className="text-xl font-bold">About Us</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Discover a curated range of nutritious and clean-label snacks, responsibly sourced and distributed across Canada. We connect unique health brands with conscious retailers and consumers.
        </p>
      </section>

      {/* Product Range Table */}
      <section className="space-y-4 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold">Product Categories</h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-200 text-xs sm:text-sm text-left rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Product Category</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Sample Products</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Features</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Ayurvedic/Natural Mixes</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Herbal snacks, digestive & churans</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Ancient recipe blends, clean-label</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Kids' Healthy Snacks</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Natural billies, fruit strips</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">No artificial flavours or colours</td>
              </tr>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Guilt-Free Munchies</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Baked chips, popped snacks</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">No trans fat, low-calorie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sourcing & Curation Process */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Sourcing & Curation Process
        </h2>
        <p className="text-lg text-gray-700 max-w-auto mx-left leading-relaxed ">
          We work closely with sustainable, small-batch manufacturers and health-focused brands to ensure every product meets clean-label, eco-conscious standards.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
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

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
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
        </div>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-semibold">SEO Keywords:</span> clean-label snacks sourcing, organic food distribution, sustainable FMCG supplier
        </p>
      </section>

      {/* Applications */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Applications
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-left leading-relaxed ">
          Our FMCG products are ideal for:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Store className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Organic Grocery Stores & Health Food Chains
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Expand your healthy offerings with our diverse range of organic snacks.
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

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingCart className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Retailers and Vending Suppliers
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Offer popular, healthy snack choices to your customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
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

      {/* Features */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Features
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-left leading-relaxed">
          What sets our FMCG range apart:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Leaf className="text-green-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Non-GMO, Organic and Gluten-Free Options
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Committed to natural ingredients and catering to dietary sensitivities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="text-red-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Rich in Protein, Fibre and Antioxidants
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Nutrient-dense snacks supporting overall health and vitality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="text-pink-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                No Artificial Preservatives or Sweeteners
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Clean ingredients for pure, unadulterated taste and health benefits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition ">
            <div className="flex items-center gap-3 mb-2">
              <Package className="text-indigo-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Sustainable Packaging (select products)
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Eco-friendly packaging choices to minimize environmental impact.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition lg:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <Tag className="text-yellow-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                White-Label and Private-Label Ready
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Customizable options to feature your brand on our quality products.
            </p>
          </div>
        </div>
        
      </section>

      {/* Sustainability & Certifications */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Sustainability & Certifications
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition ">
            <div className="flex items-center gap-3 mb-2">
              <Award className="text-green-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                USDA Organic, India Organic, or Equivalent Certified
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Adhering to strict organic standards for integrity and purity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="text-emerald-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Halal, Vegan, or FSSAI Approved
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Meeting diverse dietary and regulatory requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Recycle className="text-indigo-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800 lg:col-span-2">
                Packaged Using Recyclable or Compostable Materials
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Our commitment to reducing waste and promoting circular economy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition ">
            <div className="flex items-center gap-3 mb-2">
              <Truck className="text-blue-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Carbon-Conscious in Shipping
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Minimizing our carbon footprint throughout the supply chain.
            </p>
          </div>
        </div>
        
      </section>

      {/* Storage & Handling Suggestions */}
      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Storage & Handling Suggestions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Warehouse className="text-yellow-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Store in Dry, Cool Environments
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Optimal conditions ensure the freshness and quality of our snacks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Thermometer className="text-indigo-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Ideal Temperature: &lt;25°C
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Maintain this temperature for best product longevity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-green-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Use FIFO Method for Shelf Freshness
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              First-In, First-Out rotation helps manage inventory and freshness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Printer className="text-red-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Print-Friendly Expiry Labels Available
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Easy-to-read labels for clear dating and compliance.
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
          Whether you’re launching a health brand or expanding a store line:
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

      {/* FAQs Section */}
      <section className="space-y-4 py-12 px-4 md:px-8">
        <h2 className="text-2xl font-bold" style={{ color: '#000000ff' }}>FAQs</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full flex justify-between items-center px-2 sm:px-4 py-3 text-left font-medium text-gray-800 focus:outline-none bg-transparent hover:bg-gray-50 rounded transition"
                onClick={() => {
                  setOpenIndexes((prev) =>
                    prev.includes(idx)
                      ? prev.filter(i => i !== idx)
                      : [...prev, idx]
                  );
                }}
                aria-expanded={openIndexes.includes(idx)}
                aria-controls={`faq-answer-${idx}`}
                style={{ transition: "background 0.2s" }}
              >
                <span>{faq.question}</span>
                <span className="ml-2 flex items-center justify-center">
                  <motion.svg
                    className={`w-6 h-6`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    animate={{
                      rotate: openIndexes.includes(idx) ? 45 : 0,
                      color: openIndexes.includes(idx) ? "#2563eb" : "#9ca3af"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </motion.svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndexes.includes(idx) && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    className="px-2 sm:px-4 pb-4 text-gray-700"
                    key="content"
                    initial={{ opacity: 0, height: 0, paddingTop: 0 }}
                    animate={{ opacity: 1, height: "auto", paddingTop: 12 }}
                    exit={{ opacity: 0, height: 0, paddingTop: 0 }}
                    transition={{
                      opacity: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
                      height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      paddingTop: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA (Call to Action) */}
      <section className="border-t pt-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-600">
          Want to distribute or retail the healthiest FMCG products? Connect with us for:
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-2 mb-6">
          <li>Sample pack requests</li>
          <li>Price lists & MOQ details</li>
          <li>Private label & bulk supply</li>
        </ul>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition">
            <Phone size={18} /> Contact Us
          </button>
          <button className="border border-gray-300 hover:border-gray-500 text-gray-800 px-6 py-3 rounded-xl flex items-center gap-2 transition">
            <Download size={18} /> Download Brochure
          </button>
          <button className="border border-gray-300 hover:border-gray-500 text-gray-800 px-6 py-3 rounded-xl flex items-center gap-2 transition">
            <UserPlus size={18} /> Apply as Retail Partner
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} [Your Company Name] — Healthy snacks for a healthier future.
      </footer>
    </div>
  );
}