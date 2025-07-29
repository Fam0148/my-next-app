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
        <strong>Global Products. Retail-Ready. Seamlessly Delivered.</strong>
        <br /><br />
        Apex Exims is a globally connected import-export and distribution company headquartered in Canada with strong sourcing roots across Asia. We specialize in bridging world-class FMCG, fashion and lifestyle brands with retailers and distributors across North America and beyond.
        <br /><br />
        From vacuum-fried snacks and organic skincare to natural fibre construction boards and high-performance apparel, we deliver retail-ready, compliant and high-demand products that meet evolving global consumer trends.
        <br /><br />
        We don’t just move goods we manage entire product lifecycles from sourcing and certification to packaging, warehousing and channel placement. 
        <br /><br />
        <strong>Our focus is clear - Make international products shelf-ready and market-successful. </strong>
        Whether you're a supermarket buyer, an online marketplace, a Horeca chain, or a niche D2C brand, we help you source smarter, launch faster and scale sustainably.
      </p>
    </motion.div>
  </section>
);

export default AboutUs;
