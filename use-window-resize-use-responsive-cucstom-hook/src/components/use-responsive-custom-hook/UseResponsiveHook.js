import React, { useEffect, useLayoutEffect, useState } from 'react';

const UseResponsiveHook = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default UseResponsiveHook;
