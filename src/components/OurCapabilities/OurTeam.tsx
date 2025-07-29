"use client";
import { motion } from "framer-motion";

const OurTeam = () => (
  <section className="py-16 px-6 md:px-20 bg-gray-50">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-left"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Team</h2>
      <p className="text-gray-700 mb-4">
        Cross-Border. Cross-Functional. Built for Scale.
Every product that reaches a shelf passes through the hands of specialists who understand the nuances of both manufacturing and market demand. Our team blends global insight with local precision
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li> Sourcing Specialists based in Asia, working directly with vetted factories.</li>
        <li>Compliance & Packaging Advisors ensuring your products meet retail regulations and labeling laws.</li>
        <li>Retail Experts managing warehousing, buyer relations, and distribution partnerships.</li>
        <li>Product Scouts & Category Managers identifying trends and high-potential product categories.</li>
        <li>Export-Import Consultants ensuring smooth cross-border documentation and logistics</li>
        <li><strong>Together, we simplify the complex, reduce time-to-market and ensure every shipment is a step toward lasting retail success.</strong></li>
    
      </ul>
    </motion.div>
  </section>
);

export default OurTeam;
