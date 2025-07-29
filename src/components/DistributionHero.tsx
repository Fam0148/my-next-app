'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const DistributionHero = () => (
  <motion.section
    className="relative bg-cover bg-center py-16 px-4 md:px-10 lg:px-24 grid md:grid-cols-2 gap-12 items-center h-[70vh]"
    style={{
      backgroundColor: "#112A46" // Replace with your image URL or use an SVG for illustration
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1 }}  // Trigger animation when section comes into view
    viewport={{ once: true }}  // Make sure the animation runs only once when the user scrolls to the section
  >
    {/* Overlay for better text readability */}
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

    {/* Left Side */}
    <div className="relative z-10">
      <motion.h1
        className="text-4xl md:text-5xl font-bold leading-tight text-white"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Distribution & Market Access <br />
        for Your Brand
      </motion.h1>
    </div>

    {/* Right Side */}
    <div className="relative z-10">
      <motion.p
        className="text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Distribution Solutions
      </motion.p>

      <motion.h2
        className="text-2xl md:text-3xl font-bold text-white mb-4"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        We help brands enter and scale in the global market
      </motion.h2>

      <motion.p
        className="text-gray-200 md:text-lg"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        From sourcing to store shelves, we simplify the supply chain and make your product discoverable across retail, quick commerce, and B2B networks.
      </motion.p>

      <motion.div
        className="mt-4 flex items-center text-indigo-600 cursor-pointer"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-sm font-semibold">Learn More</span>
        <ArrowUpRight className="ml-2 text-xl" />
      </motion.div>
    </div>
  </motion.section>
);
