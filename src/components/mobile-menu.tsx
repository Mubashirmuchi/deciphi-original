// "use client";
// import { MenuItem } from '@/lib/menu';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';

// const MobMenu = ({ Menus }: { Menus: MenuItem[] }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       x: '100%',
//       transition: {
//         duration: 0.2,
//       },
//     },
//     open: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 text-white/90 hover:bg-white/10  rounded-lg"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d={'M4 6h16M4 12h16M4 18h16'}
//           />
//         </svg>
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#18181A] shadow-xl p-4"
//           >
//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-white/90 hover:bg-white/10  rounded-lg flex w-full justify-end"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={'M6 18L18 6M6 6l12 12'}
//                 />
//               </svg>
//             </motion.button>

//             <nav className="space-y-1">
//               {Menus.map((menu, index) => (
//                 <motion.div
//                   key={menu.name}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <button className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 rounded-lg">
//                     {menu.name}
//                   </button>
//                   {menu.submenu && (
//                     <div className="pl-4 space-y-1">
//                       {menu.submenu.map((item) => (
//                         <motion.button
//                           key={item.name}
//                           whileHover={{ x: 10 }}
//                           className="w-full text-left px-4 py-2 text-white/70 hover:text-white/90"
//                         >
//                           {item.name}
//                         </motion.button>
//                       ))}
//                     </div>
//                   )}
//                 </motion.div>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default MobMenu;

import React from "react";

const MobileNav = () => {
  return <div>MobileNav</div>;
};

export default MobileNav;
