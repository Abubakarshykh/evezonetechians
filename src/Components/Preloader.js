// "use client";

// import { useState, useEffect } from "react";

// export default function Preloader() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [text, setText] = useState("");
//   const fullText = "Evezone Tech";
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < fullText.length) {
//       const typingInterval = setTimeout(() => {
//         setText((prev) => prev + fullText[index]);
//         setIndex(index + 1);
//       }, 200); // Adjust speed here

//       return () => clearTimeout(typingInterval);
//     } else {
//       // Ensure preloader stays visible for a few seconds after typing completes
//       const hideTimeout = setTimeout(() => setIsVisible(false), 5000); // Wait 2s after typing finishes
//       return () => clearTimeout(hideTimeout);
//     }
//   }, [index]);

//   return (
//     isVisible && (
//       <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#222222] to-[#FFAD00] z-50 transition-opacity duration-500">
//         {/* Animated Typing Effect */}
//         <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
//           {text}
//         </h1>
//       </div>
//     )
//   );
// }
