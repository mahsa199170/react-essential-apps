import React, { useRef, useState } from 'react';
import UseOutsideClick from './use-outside-click/UseOutsideClick';

const UseOutsideClickParent = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  const handleClick = () => {
    setShowContent(!showContent);
  };
  UseOutsideClick(ref, handleClick);

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>this is a random content</h1>
          <p>please click outside of this content to hide it</p>
        </div>
      ) : (
        <button onClick={handleClick}>Show content</button>
      )}
    </div>
  );
};

export default UseOutsideClickParent;
