"use client";
import { motion } from "framer-motion";

const OurTeam = () => (
  <section className="py-16 px-6 md:px-20 bg-gray-50">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Team</h2>
      <p className="text-gray-700 mb-4">
        Behind every shipment and retail listing is a passionate team that understands both Asian manufacturing and Canadian regulations.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Sourcing experts in Asia working directly with trusted factories</li>
        <li>Canadian distribution & compliance partners managing warehousing & buyer relations</li>
        <li>Cross-border team includes:
          <ul className="list-[circle] list-inside ml-4 mt-1">
            <li>FMCG retail specialists</li>
            <li>Packaging & compliance advisors</li>
            <li>Product scouts & category managers</li>
            <li>Export-import consultants</li>
          </ul>
        </li>
      </ul>
    </motion.div>
  </section>
);

export default OurTeam;
