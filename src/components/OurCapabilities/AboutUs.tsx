"use client";
import { motion } from "framer-motion";

const AboutUs = () => (
  <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="max-w-3xl text-lg leading-relaxed">
        Bridging the Best with the Canadian Market. <br />
        <strong>Global Reach, Local Expertise. Inventory Management</strong>
        <br /><br />
        We’re a global distribution company based in Canada, operating with a strong sourcing backbone in Asia. Our mission is simple:
        To bring high-quality, retail-ready FMCG products to Canadian shelves—from healthy snacks like Flyberry vacuum-fried chips to future-ready categories in skincare, home materials, and more.
        <br /><br />
        We understand the gap between authentic product supply and Canadian compliance standards. That’s why we go beyond importing—we deliver fully compliant, bilingual-packaged, and shelf-ready products designed to succeed in Canadian retail.
        <br /><br />
        Whether you’re a supermarket buyer, a Q-commerce platform, or a niche distributor, we’re here to make sourcing smoother, safer, and smarter.
      </p>
    </motion.div>
  </section>
);

export default AboutUs;
