"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Retail-Ready by Design",
    content: "From packaging and bilingual labeling to shelf-life and palletization, we deliver SKUs designed to sit proudly on Canadian shelves."
  },
  {
    title: "Health-Conscious, Ethnic-Inspired Focus",
    content: "Featuring Flyberry’s air-vacuumed banana and okra chips — clean-label, globally trending products for modern consumers."
  },
  {
    title: "Low MOQ for Market Entry",
    content: "We support small-format testing with MOQs as low as 100 units/SKU — ideal for pilots and independent retail."
  },
  {
    title: "Fast, Transparent, Reliable",
    content: "Our distributed model ensures speed, traceability, and responsiveness across sourcing, logistics, and stocking."
  }
];

const Differentiators = () => (
  <section className="py-16 px-6 md:px-20 bg-white">
    <motion.h2
      className="text-3xl font-bold mb-10 text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      What Makes Us Different
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className="p-6 bg-gray-50 border border-indigo-100 rounded-xl shadow-sm hover:shadow-md transition"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">{card.title}</h3>
          <p className="text-gray-600 text-sm">{card.content}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Differentiators;
