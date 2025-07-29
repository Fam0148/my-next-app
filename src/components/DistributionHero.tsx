'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const DistributionHero = () => (
  <motion.section
    className="relative min-h-screen bg-cover bg-center py-16 px-4 sm:px-6 md:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
    style={{ backgroundColor: "#112A46" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 bg-black opacity-50 z-0" />

    <div className="relative z-10 text-center md:text-left">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Distribution & Market Access
        <br className="hidden sm:block" />
        for Your Brand
      </motion.h1>
    </div>

    <div className="relative z-10 text-center md:text-left">
      <motion.p
        className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-indigo-500 mb-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Distribution Solutions
      </motion.p>

      <motion.h2
        className="text-xl sm:text-2xl md:text-5xl font-bold text-white mb-3"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        We help brands enter and scale in the global market
      </motion.h2>

      <motion.p
        className="text-gray-200 text-sm sm:text-base md:text-lg"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        From sourcing to store shelves, we simplify the supply chain and make your product discoverable across retail, quick commerce, and B2B networks.
      </motion.p>

      <motion.div
        className="mt-4 flex justify-center md:justify-start items-center text-indigo-500 cursor-pointer"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <span className="text-sm font-semibold">Learn More</span>
        <ArrowUpRight className="ml-2 text-xl" />
      </motion.div>
    </div>
  </motion.section>
);
