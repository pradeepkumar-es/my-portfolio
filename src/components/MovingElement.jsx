// import React, { useState, useEffect } from 'react';
// import '../css/MovingElement.css'; // Import CSS for styling (you can create this file)

// const MovingElement = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) { // Adjust the threshold value as needed
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`moving-element ${scrolled ? 'scrolled' : ''}`}>
//       v
//     </div>
//   );
// };

// export default MovingElement;
