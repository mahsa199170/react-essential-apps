import React, { useEffect } from 'react';

const UseOutsideClick = (ref, handler) => {
  //use the useEffect hook to add event listeners when the
  // component mounts and remove them when it unmounts.
  // This is important for performance and preventing memory leaks.
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    // When the component unmounts or the ref or handler changes,
    // we remove the event listeners to avoid memory leaks.
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

export default UseOutsideClick;
