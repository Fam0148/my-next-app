"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Retail & Consumer Marketing",
    description:
      "Drive visibility with Canadian retailers through shelf design, promotions, and co-branded events.",
    gradient: "from-white-600 to-blue-500",
    emoji: "📢",
  },
  {
    title: "E-commerce & Logistics",
    description:
      "Marketplace onboarding, fulfillment, and last-mile delivery for digital-first growth.",
  gradient: "from-white-600 to-blue-500",
    emoji: "🚚",
  },
  {
    title: "Product Launch Partnerships",
    description:
      "Accelerate your rollout with campaign planning and early retail access.",
gradient: "from-white-600 to-blue-500",
    emoji: "🚀",
  },
  {
    title: "Monogram Display & Packaging",
    description:
      "Retail-ready designs with shelf-dominating branding and monogrammed merchandising.",
   gradient: "from-white-600 to-blue-500",
    emoji: "🎁",
  },
];

const BonusServices = () => {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-[#112A46]"
      id="bonus-services"
    >
      {/* Left Column: Cards */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Bonus Services
        </motion.h2>

        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`rounded-xl p-5 text-white shadow-md bg-gradient-to-br ${service.gradient} hover:scale-[1.02] transition`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-2xl">{service.emoji}</span> {service.title}
            </h3>
            <p className="text-sm mt-2 text-white/90">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Right Column: Themed Image */}
      <motion.div
        className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-banner-bg.png')`
          }}
        />
      </motion.div>
    </section>
  );
};

export default BonusServices;
