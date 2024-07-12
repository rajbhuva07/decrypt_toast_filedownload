import React, { useState } from 'react';
import {  decryptText } from './cryptoUtils';
import CryptoJS from 'crypto-js';
const secretKey = CryptoJS.enc.Utf8.parse('veHDKfJPRVWEPUH2EflEbt8Q4jZl49t8');
const Decryment = () => {
  const [inputText, setInputText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [decryptionError, setDecryptionError] = useState('');


  const handleDecrypt = () => {
    try {
      if (!inputText.trim()) {
        throw new Error('Please enter encrypted text to decrypt.');
      }

      const decrypted = decryptText(inputText.trim());
      if (typeof decrypted === 'string' && decrypted.startsWith('Error decrypting')) {
        setDecryptionError(decrypted);
        setDecryptedText('');
      } else {
        setDecryptedText(decrypted);
        setDecryptionError('');
      }
    } catch (error) {
      setDecryptionError(`Error decrypting: ${error.message}`);
      setDecryptedText('');
    }
  };
  return (
    <div>
      <h1>AES Decryption</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter encrypted text to decrypt"
        rows={5}
        cols={50}
      />
      <br />
      <button onClick={handleDecrypt}>Decrypt</button>
      {decryptionError && (
        <div style={{ color: 'red' }}>{decryptionError}</div>
      )}
      {decryptedText && (
        <div>
          <h3>Decrypted Text</h3>
          <textarea
            value={decryptedText}
            readOnly
            rows={5}
            cols={50}
          />
        </div>
      )}
    </div>
  );
};
export default Decryment;
