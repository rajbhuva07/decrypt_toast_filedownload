import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
const decryptBase64 = (encodedString) => {
    try {
      const decodedString = atob(encodedString);
      return decodedString;
    } catch (error) {
      console.error("Failed to decode base64 string:", error);
      return null;
    }
  };
const DecryptInput = () => {
    const encodedMessage = "VYO++RAx1RAa8/KsIwW9tN5v6DqhcDs/oFW+4KO98EYsy61a3QKbLOhX+iagkpMKD3iK6sKYhg8RRUQSg1EIoIFmK8YbwtV3kfOfHcpqg4IJ3pOENOcrobhxu/gvkEa7fhQWcm58olTroGyuglUM5Q==";
  const decryptedMessage = decryptBase64(encodedMessage);

  return (
    <div>
      <h1>Decrypted Message</h1>
      <p>{decryptedMessage ? decryptedMessage : "Failed to decode message"}</p>
    </div>
  );
};

export default DecryptInput;
