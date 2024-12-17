import React from 'react';
import UseResponsiveHook from './use-responsive-custom-hook/UseResponsiveHook';

const Test = () => {
  const { width, height } = UseResponsiveHook();

  return (
    <div>
      <h1>Use Window Resize hook</h1>
      <p> width is {width}</p>
      <p> height is {height}</p>
    </div>
  );
};

export default Test;
