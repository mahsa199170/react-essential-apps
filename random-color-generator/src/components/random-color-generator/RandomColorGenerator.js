import React, { useEffect, useState } from 'react';
import './RandomColorGenerator.css';

// #123456
// rgb(25,45,67)

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState('rgb');
  const [color, setColor] = useState('#000000');

  const generateRandomNum = (length) => {
    return Math.floor(Math.random() * length);
  };

  const generateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomNum(hex.length)];
    }
    setColor(hexColor);
  };

  const generateRgbColor = () => {
    const r = generateRandomNum(256);
    const g = generateRandomNum(256);
    const b = generateRandomNum(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === 'rgb') generateRgbColor();
    else generateHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button
        onClick={typeOfColor === 'hex' ? generateHexColor : generateRgbColor}
      >
        Generate random color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
