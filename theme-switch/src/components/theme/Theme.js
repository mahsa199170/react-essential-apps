import React, { useState } from 'react';
import './Theme.css';
import useLocalStorage from '../../useLocalStorage';

const Theme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hug The Beautiful World!!</p>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default Theme;

///////////////////////////////

// without using custom hook

// import React, { useEffect, useState } from 'react';
// import './Theme.css';

// const Theme = () => {
//   // Retrieve theme from localStorage, defaulting to 'light' if not found
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   // Handle theme change
//   const handleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//   };

//   // Store theme in localStorage when it changes
//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <div className="light-dark-mode" data-theme={theme}>
//       <div className="container">
//         <p>Hug The Beautiful World!!</p>
//         <button onClick={handleTheme}>Change Theme</button>
//       </div>
//     </div>
//   );
// };

// export default Theme;
