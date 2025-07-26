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
      className="bg-[#112A46] text-white h-[70vh] flex items-center px-4 md:px-10 lg:px-24"
    >
      <div className="grid md:grid-cols-2 items-center gap-12 w-full">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase text-sm font-semibold tracking-wider text-indigo-200 mb-2">
            Smart Distribution
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Source Innovative Global Products & Boost Your Shelf Margins by 50%
          </h2>
          <p className="max-w-xl text-md md:text-lg text-indigo-100">
            We help Canadian retailers and wholesalers source trending,
            clean-labeled products directly from trusted manufacturers. Our
            process reduces your sourcing costs and increases your
            profitability — with full compliance and support.
          </p>
        </motion.div>

        {/* Right Column: Parallax Image */}
        <motion.div
          className="relative w-full h-64 md:h-[450px]"
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
