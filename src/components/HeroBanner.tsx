// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export const HeroBanner = () => {
//   return (
//     <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-black text-white">
//       {/* Background Image */}
//       <Image
//         src="/hero-banner-bg.png"
//         alt="Hero background"
//         fill
//         className="object-cover opacity-30"
//         priority
//       />

//       {/* Overlay content */}
//       <div className="relative z-10 max-w-3xl text-center px-4">
//         <motion.p
//           className="text-sm uppercase tracking-widest text-indigo-300 mb-2"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           ACCELERATE YOUR BRAND'S REACH IN CANADA
//         </motion.p>

//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.2 }}
//         >
//           Smart Distribution <br />
//           <span className="text-indigo-400">Tailored for Ambitious Brands</span>
//         </motion.h1>

//         <motion.p
//           className="text-md md:text-lg text-gray-200 mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           We specialize in getting your products on Canadian shelves—retail chains, quick commerce,
//           and beyond. From India to Canada, we bridge global supply with local demand.
//         </motion.p>

//         <motion.a
//           href="/partner"
//           className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         >
//           Partner With Us
//         </motion.a>
//       </div>
//     </section>
//   );
// };

// - - Images that slides each 3 seconds. -- //

'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/hero-banner-bg.png',
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
];

export const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); // Cycle through images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[current]} // Key ensures proper animation for each image
            initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
            animate={{ opacity: 1, x: 0 }} // Slide in from the right
            exit={{ opacity: 0, x: -100 }} // Slide out to the left
            transition={{ duration: 1 }} // Smooth transition
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`Hero background ${current + 1}`}
              fill
              className="object-cover opacity-30"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-6xl text-center px-4">
        <motion.p
          className="text-sm uppercase tracking-widest text-indigo-300 mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Expand your reach globally
        </motion.p>

        <motion.h1
          className="text-4xl md:text-7xl font-extrabold leading-tight text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          Smart Supply Chain <br />
          <span className="text-indigo-400">Tailored for Ambitious Brands</span>
        </motion.h1>

        <motion.p
          className="text-md md:text-xl text-gray-200 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          We specialize in getting your products on global market-retail chains, quick commerce
          and beyond. We bridge global supply with local demand.
        </motion.p>

        <motion.a
          href="/partner"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Partner With Us
        </motion.a>
      </div>
    </section>
  );
};
