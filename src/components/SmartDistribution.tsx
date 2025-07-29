'use client'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export const SmartDistribution = () => {
  const ref = useRef(null);

  // Track scroll progress for parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect: translate image vertically as user scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["-60px", "60px"]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={ref}
      className="bg-[#112A46] text-white py-16 md:py-20 lg:py-24 flex items-center px-4 md:px-10 lg:px-24 min-h-screen" // Adjusted padding and added min-h-screen
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16 w-full max-w-7xl mx-auto"> {/* Changed to grid-cols-1 for mobile, adjusted gap, added max-w and mx-auto */}
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-xs sm:text-sm font-semibold tracking-wider text-indigo-200 mb-2"> {/* Adjusted text size for smaller screens */}
            Smart Sourcing and Procurement
          </p>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"> {/* Adjusted text size and line height */}
            Source Innovative Global Products & Boost Your Shelf Margins
          </h2>
          <p className="max-w-xl text-base md:text-lg text-indigo-100"> {/* Adjusted text size */}
            We help distributors, retailers, and wholesalers source trending, clean-labeled products directly from trusted manufacturers. Our process reduces your sourcing costs and increases your profitability with full compliance and support.
          </p>
        </motion.div>

        {/* Right Column: Parallax Image */}
        <motion.div
          className="relative w-full h-64 sm:h-80 md:h-[450px] lg:h-[550px] mt-8 md:mt-0" // Adjusted image heights for different screens and added margin-top for mobile
          style={{ y: smoothY }}
        >
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/hero-banner-bg.png')`, // Replace with actual image
                clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};