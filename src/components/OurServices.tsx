'use client'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ShoppingBagIcon, ClipboardDocumentCheckIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/solid";

const servicePoints = [
  {
    icon: <SparklesIcon className="w-8 h-8 text-indigo-600" />,
    title: "Curated Global Sourcing & Product Innovation",
    desc: "We identify winning products and manufacturers, helping businesses stand out with unique, high-demand assortments.",
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-indigo-600" />,
    title: "Regulatory-Ready, Retail-Compliant Product Delivery",
    desc: "We manage all certifications, packaging compliance, and logistics to meet the required retail & import standards.",
  },
  {
    icon: <ShoppingBagIcon className="w-8 h-8 text-indigo-600" />,
    title: "Retail & Trade Channel Distribution",
    desc: "Get listed in major retail chains, quick commerce platforms, and independent distributors.",
  },
  {
    icon: <UserGroupIcon className="w-8 h-8 text-indigo-600" />,
    title: "Private Label & Brand Incubation Partnerships",
    desc: "We co-create private label programs and grow new brands under proven go-to-market strategies.",
  },
];

export const OurServices = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Apply smooth spring animation only when the section is in view
  const y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 py-16 px-4 md:py-20 md:px-10 lg:px-24 flex flex-col justify-center min-h-screen" // Added min-h-screen for better vertical spacing on smaller screens
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto px-2"> {/* Added px-2 for padding on very small screens */}
          We help international brands streamline their product journey into the
          Canadian market — from sourcing and compliance to retail shelf
          presence and private label programs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"> {/* Adjusted gap and added max-w-6xl with mx-auto for centering */}
        {servicePoints.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-indigo-200 transition duration-300 border border-indigo-100 flex flex-col items-start" // Added flex-col and items-start for consistent layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{ y: smoothY }}
          >
            <div className="flex items-center gap-4 mb-3"> {/* Changed items-start to items-center for better vertical alignment of icon and title */}
              <div className="shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base">{service.desc}</p> {/* Adjusted text size for description */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};