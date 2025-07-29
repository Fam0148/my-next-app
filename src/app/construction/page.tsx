'use client'
import { motion, AnimatePresence } from 'framer-motion';

import { Leaf, Recycle, ShieldCheck, Ruler, Home, Layout, Droplets, Briefcase, Building2, ThermometerSun, BugOff, Smile, Flame, Sun, Hammer, FileCheck2, BadgeCheck, Wrench, ScissorsSquareDashedBottom, FileText, PackageSearch, Mail, DownloadCloud, Phone, Download } from 'lucide-react';

import { useState } from "react";

import '../../app/globals.css';


export default function NFCBoardsPage() {

  // FAQ data
  const faqs = [
    {
      question: "Can NFC be used in bathrooms?",
      answer: "Yes! It's fully waterproof, ideal for wet areas.",
    },
    {
      question: "Is it stronger than MDF?",
      answer: "Yes. Higher density and screw-holding capacity.",
    },
    {
      question: "Will it fade outdoors?",
      answer: "No. With UV coating, it retains integrity.",
    },

    {
      question: "Can it be used for exterior wall cladding?",
      answer: "Absolutely. Durable and weather-resistant.",
    },

    {
      question: "Is it eco-certified?",
      answer: "Yes, made from rice husk and recycled polymers. FSC & GREENGUARD available.",
    },

  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  return (
    <div className="px-2 sm:px-4 md:px-6 py-8 md:py-10 max-w-full md:max-w-6xl mx-auto space-y-8 md:space-y-12 text-gray-800 ">
      <section className="h-screen flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-3xl md:text-5xl font-bold text-center leading-tight"
        >
          Natural Fibre Composite Panels <br />
          Eco-Friendly, Waterproof Boards for All Applications
        </motion.h1>
      </section>
      <section className="space-y-4 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold">Product Range</h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-200 text-xs sm:text-sm text-left rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Product Name</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Thickness (mm)</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Size (ft)</th>
                <th className="px-2 sm:px-4 py-2 border border-gray-100">Application</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">NFC Standard Board</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">6 / 8 / 12 / 18 / 25</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">6x4 / 8x4</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Furniture, wardrobes, cladding</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">NFC Cladding Panel</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">10 / 12 / 18</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">8x4</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Outdoor wall cladding</td>
              </tr>
              <tr className="bg-white">
                <td className="px-2 sm:px-4 py-2 border border-gray-100">NFC Door Panel</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">30 / 32</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">6.5x3</td>
                <td className="px-2 sm:px-4 py-2 border border-gray-100">Residential & commercial doors</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>



      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Manufacturing Process
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Eco-Friendly Composition
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Crafted from rice husk residue and thermoplastics, our NFC boards are durable, sustainable, and 100% wood-free.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Recycle className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Fully Renewable Material
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              With zero wood content, rice husk offers a renewable base—making each board environmentally responsible from the start.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Safe & Non-toxic
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Using formaldehyde-free, non-toxic additives, our panels meet modern health and safety standards for any space.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Ruler className="w-6 h-6 text-rose-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Thermoform Ready
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Easily adaptable to complex shapes and CNC routing, our material is designed for architectural creativity and precision.
            </p>
          </div>
        </div>
      </section>


      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Applications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Home className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Residential Interiors
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Ideal for kitchen cabinets, wardrobes, and false ceilings with a stylish, modern finish.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Layout className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Modular Furniture
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Perfect for partition panels and modular furniture in compact and flexible environments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Droplets className="w-6 h-6 text-cyan-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Moisture-Prone Areas
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Reliable for bathroom vanities, spa rooms, and indoor pool cladding where water resistance is key.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Commercial Spaces
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Efficient for retail stores, hospitals, schools, and offices with high traffic and functional demands.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-200 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Building2 className="w-6 h-6 text-rose-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Exterior Installations
              </h3>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              Great for exterior wall cladding, pergolas, and signage panels that need to withstand outdoor conditions.
            </p>
          </div>
        </div>
      </section>


      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-blue-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                100% Waterproof
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Built for humid environments, resists swelling or damage from moisture.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <BugOff className="text-green-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Termite & Pest Resistant
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Naturally repels termites and pests — no need for chemical treatments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Smile className="text-pink-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                VOC-Free & Safe
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Zero harmful emissions — ideal for kids, hospitals, and closed spaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Flame className="text-red-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Fire-Retardant
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Carries required certifications and ensures slow fire and smoke spread and ensures safety as required.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Sun className="text-yellow-500 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                UV-Stable
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              With protective coating, resists fading and degradation in sunlight.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Hammer className="text-gray-700 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Easy to Work With
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Can be painted, sanded, or machined just like wood, but lasts longer.
            </p>
          </div>
        </div>
      </section>



      <section className="space-y-8 py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Sustainability & Green Rating
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Leaf className="text-green-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                No Wood, No Trees Cut
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Completely wood-free product — helps protect forests and biodiversity.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-2">
              <Recycle className="text-emerald-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Upcycled Agricultural Waste
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Built from rice husk and recycled thermoplastics — reduces landfill impact.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition ">
            <div className="flex items-center gap-3 mb-2">
              <FileCheck2 className="text-indigo-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                Meets Toxicity Standards
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Fully compliant with safety regulations for VOC Emissions.
            </p>
          </div>

          {/* 4 */}

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition lg:col-span-3">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-blue-600 w-6 h-6" />
              <h3 className="text-lg font-bold text-gray-800">
                GREENGUARD, EPD Compliant & LEED® Credit Eligible
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Environmentally transparent and supports green building certification requirements to be eco friendly for merdern architercture.
            </p>
          </div>
        </div>
      </section>
      
      <section className="space-y-4  py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold">Why NFC?</h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-200 text-xs sm:text-sm text-left rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border border-gray-100">Issue with MDF/HDF/Plywood</th>
                <th className="px-4 py-2 border border-gray-100">NFC Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-100">Swelling from moisture</td>
                <td className="px-4 py-2 border border-gray-100">100% waterproof</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-100">Termite or fungal attack</td>
                <td className="px-4 py-2 border border-gray-100">Fully pest-proof</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-100">VOCs & formaldehyde</td>
                <td className="px-4 py-2 border border-gray-100">Non-toxic, safe</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border border-gray-100">Short outdoor lifespan</td>
                <td className="px-4 py-2 border border-gray-100">UV & weather-stable</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border border-gray-100">Poor sustainability rating</td>
                <td className="px-4 py-2 border border-gray-100">Zero wood, LEED aligned</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 ">
        <h2 className="text-2xl font-bold" style={{ color: '#000000ff' }}>FAQs</h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx}>
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
                {/* Plus/Minus Icon */}
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


    </div>
  );

}