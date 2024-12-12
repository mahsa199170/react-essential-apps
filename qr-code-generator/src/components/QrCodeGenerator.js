import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './QrCodeGenerator.css';

const QrCodeGenerator = () => {
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [input, setInput] = useState('');
  const generateQrCode = () => {
    setQrCodeValue(input);
    setInput('');
  };
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div className="bottom-margin">
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={generateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCodeValue}
          size={400}
          bgColor="#fff"
        />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
