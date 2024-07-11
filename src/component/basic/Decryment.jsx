import React, { useState } from 'react';
import {  decryptText } from './cryptoUtils';

const Decryment = () => {
  const [inputText, setInputText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [decryptionError, setDecryptionError] = useState('');

  const handleDecrypt = () => {
    const decrypted = decryptText(inputText.trim());
    if (typeof decrypted === 'string' && decrypted.startsWith('Error decrypting')) {
      setDecryptionError(decrypted);
      setDecryptedText('');
    } else {
      setDecryptedText(decrypted);
      setDecryptionError('');
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
