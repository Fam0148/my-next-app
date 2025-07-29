// // 'use client';

// // import { useState } from 'react';
// // import { Menu, X } from 'lucide-react';
// // import Link from 'next/link';

// // const navLinks = [
// //   { label: 'Home', href: '/' },
// //   { label: 'Products & Portfolio', href: '/products' },
// //   { label: 'Our Capabilities', href: '/our-capabilities' },
// //   { label: 'Our Story', href: '/story' },
// //   { label: 'Blog', href: '/blog' }
// // ];

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <header className="fixed w-full bg-black shadow-md z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16">
// //           {/* Left: Logo */}
// //           <div className="flex-shrink-0">
// //             <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
// //               Apexemims
// //             </Link>
// //           </div>

// //           {/* Center: Desktop Nav */}
// //           <div className="hidden md:flex space-x-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.href}
// //                 href={link.href}
// //                 className="text-white hover:text-slate-300 font-medium transition"
// //               >
// //                 {link.label}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* Right: CTA */}
// //           <div className="hidden md:block">
// //             <Link
// //               href="/partner"
// //               className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
// //             >
// //               Become a Partner
// //             </Link>
// //           </div>

// //           {/* Hamburger: Mobile Only */}
// //           <div className="md:hidden">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="text-gray-800 focus:outline-none"
// //               aria-label="Toggle Menu"
// //             >
// //               {isOpen ? <X size={28} /> : <Menu size={28} />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Drawer */}
// //       <div
// //         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
// //           isOpen ? 'translate-x-0' : '-translate-x-full'
// //         }`}
// //       >
// //         <div className="p-4">
// //           <div className="flex justify-between items-center mb-6">
// //             <Link href="/" className="text-2xl font-bold text-gray-900">
// //               🚀 Futurify
// //             </Link>
// //             <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
// //               <X size={24} />
// //             </button>
// //           </div>
// //           <nav className="flex flex-col space-y-4">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.href}
// //                 href={link.href}
// //                 onClick={() => setIsOpen(false)}
// //                 className="text-gray-800 text-lg font-medium hover:text-indigo-600"
// //               >
// //                 {link.label}
// //               </Link>
// //             ))}
// //             <Link
// //               href="/partner"
// //               onClick={() => setIsOpen(false)}
// //               className="mt-6 inline-block bg-indigo-600 text-white text-center px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
// //             >
// //               Become a Partner
// //             </Link>
// //           </nav>
// //         </div>
// //       </div>

// //       {/* Mobile Overlay */}
// //       {isOpen && (
// //         <div
// //           onClick={() => setIsOpen(false)}
// //           className="fixed inset-0 bg-black bg-opacity-30 z-30"
// //         />
// //       )}
// //     </header>
// //   );
// // }


// // -- Updated Code while hover Dropdown --

// 'use client';

// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';

// const navLinks = [
//   { label: 'Home', href: '/' },
//   { label: 'Products & Portfolio', href: '/products' },
//   { label: 'Our Capabilities', href: '/our-capabilities' },
//   { label: 'Our Story', href: '/story' },
//   { label: 'Blog', href: '/blog' }
// ];

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed w-full bg-black shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Left: Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
//               Apexemims
//             </Link>
//           </div>

//           {/* Center: Desktop Nav */}
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map((link) =>
//               link.label === 'Products & Portfolio' ? (
//                 <div key={link.href} className="relative group">
//                   <Link
//                     href={link.href}
//                     className="text-white hover:text-slate-300 font-medium transition"
//                   >
//                     {link.label}
//                   </Link>

//                   {/* Dropdown */}
//                   <div className="absolute left-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
//                     <div className="py-2">
//                       <Link
//                         href="/products/web"
//                         className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
//                       >
//                         NFC Boards
//                       </Link>
//                       <Link
//                         href="/products/mobile"
//                         className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
//                       >
//                         FMGC
//                       </Link>
//                       <Link
//                         href="/products/designs"
//                         className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
//                       >
//                         T-Shirt Manufacture
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="text-white hover:text-slate-300 font-medium transition"
//                 >
//                   {link.label}
//                 </Link>
//               )
//             )}
//           </div>

//           {/* Right: CTA */}
//           <div className="hidden md:block">
//             <Link
//               href="/partner"
//               className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
//             >
//               Become a Partner
//             </Link>
//           </div>

//           {/* Hamburger: Mobile Only */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-6">
//             <Link href="/" className="text-2xl font-bold text-gray-900">
//               🚀 Futurify
//             </Link>
//             <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
//               <X size={24} />
//             </button>
//           </div>
//           <nav className="flex flex-col space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-800 text-lg font-medium hover:text-indigo-600"
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               href="/partner"
//               onClick={() => setIsOpen(false)}
//               className="mt-6 inline-block bg-indigo-600 text-white text-center px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
//             >
//               Become a Partner
//             </Link>
//           </nav>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-30 z-30"
//         />
//       )}
//     </header>
//   );
// }

'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'; // Import Chevron icons
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products & Portfolio', href: '/products' },
  { label: 'Our Capabilities', href: '/our-capabilities' },
  { label: 'Our Story', href: '/story' },
  { label: 'Blog', href: '/blog' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false); // New state for mobile dropdown

  return (
    <header className="fixed w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
              Apexemims
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.label === 'Products & Portfolio' ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="text-white hover:text-slate-300 font-medium transition"
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/construction"
                        className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
                      >
                        Construction
                      </Link>
                      <Link
                        href="/fmcg"
                        className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
                      >
                        FMCG
                      </Link>
                      <Link
                        href="/textiles"
                        className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
                      >
                        Textiles
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-slate-300 font-medium transition"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right: CTA */}
          <div className="hidden md:block">
            <Link
              href="/partner"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Become a Partner
            </Link>
          </div>

          {/* Hamburger: Mobile Only */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              🚀 Futurify
            </Link>
            <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.label === 'Products & Portfolio' ? (
                <div key={link.href}>
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className="flex justify-between items-center w-full text-gray-800 text-lg font-medium hover:text-indigo-600 focus:outline-none"
                  >
                    {link.label}
                    {isProductsDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isProductsDropdownOpen && (
                    <div className="pl-4 pt-2 flex flex-col space-y-2">
                      <Link
                        href="/products/web"
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 text-base hover:text-indigo-600"
                      >
                        NFC Boards
                      </Link>
                      <Link
                        href="/products/mobile"
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 text-base hover:text-indigo-600"
                      >
                        FMGC
                      </Link>
                      <Link
                        href="/products/designs"
                        onClick={() => setIsOpen(false)}
                        className="text-gray-700 text-base hover:text-indigo-600"
                      >
                        T-Shirt Manufacture
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 text-lg font-medium hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/partner"
              onClick={() => setIsOpen(false)}
              className="mt-6 inline-block bg-indigo-600 text-white text-center px-4 py-2 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Become a Partner
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
        />
      )}
    </header>
  );
}