"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Retail & Consumer Marketing",
    description:
      "Make Noise on the Shelf and Online We help brands stand out with custom marketing strategies tailored for global retail environments. From in-store promotions to co-branded campaigns, we bridge the gap between your product and the modern consumer anywhere in the world.",
    gradient: "from-white-600 to-blue-500",
    emoji: "📢",
  },
  {
    title: "E-commerce & Logistics",
    description:
      "Global Fulfillment for a Digital-First World Launch on major marketplaces and ship at scale. Our logistics network enables smooth onboarding, fulfillment and last-mile delivery perfect for omnichannel strategies across continents.",
  gradient: "from-white-600 to-blue-500",
    emoji: "🚚",
  },
  {
    title: "Product Launch Partnerships",
    description:
      "Speed Meets Strategy Fast-track your international rollout with go-to-market planning, early access to distribution partners, and retail connections. We’re not just a logistics provider we’re your global launchpad.",
gradient: "from-white-600 to-blue-500",
    emoji: "🚀",
  },
  {
    title: "Monogram Display & Packaging",
    description:
      "Brand-Led Shelf Dominance We design and deliver packaging solutions that resonate with regional markets. From monogrammed displays to custom merchandising, we ensure your product commands attention and meets regulatory standards.",
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
