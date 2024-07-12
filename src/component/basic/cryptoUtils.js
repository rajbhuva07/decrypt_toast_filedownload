// import CryptoJS from 'crypto-js';

// const secretKey = 'rajbhuva12345678'; 

// // export const encryptText = (plainText) => {
// //     const encrypted = CryptoJS.AES.encrypt(plainText, secretKey).toString();
// //     const encryptedBase64 = CryptoJS.enc.Base64.parse(encrypted).toString(CryptoJS.enc.Utf8);
// //     return encryptedBase64;
// // };

// export const decryptText = (encryptedText,iv) => {
//     try {
//      // Decode Base64 encoded ciphertext and IV
//      const ciphertextBytes = CryptoJS.enc.Base64.parse(encryptedText);
//      const ivBytes = CryptoJS.enc.Base64.parse(iv);
 
//      // Decrypt using AES
//      const decryptedBytes = CryptoJS.AES.decrypt(
//        { ciphertext: ciphertextBytes },
//        CryptoJS.enc.Utf8.parse(secretKey),
//        { iv: ivBytes, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
//      );
 
//      // Convert bytes to UTF-8 string
//      const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
//      return decryptedText;
//     } catch (error) {
//       return `Error decrypting: ${error.message}`;
//     }
//   };
import CryptoJS from 'crypto-js';

// const secretKey = CryptoJS.enc.Utf8.parse('veHDKfJPRVWEPUH2EflEbt8Q4jZl49t8');
// // const iv = 'veHDKFJRVWEPWU9E';


// export const encryptText = (text) => {
//   try {
//     const encrypted = CryptoJS.AES.encrypt(
//       text,
//       CryptoJS.enc.Utf8.parse(secretKey),
//       { mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
//     ).toString();
//     return encrypted;
//   } catch (error) {
//     return `Error encrypting: ${error.message}`;
//   }
// };


const secretKey = CryptoJS.enc.Utf8.parse('veHDKfJPRVWEPUH2EflEbt8Q4jZl49t8');

export const decryptText = (encryptedText) => {
  try {
    if (!encryptedText) {
      throw new Error('No ciphertext provided');
    }

    const ciphertext = CryptoJS.enc.Base64.parse(encryptedText);
    const key = secretKey;
    const iv = CryptoJS.lib.WordArray.create(16); 

    const decryptedBytes = CryptoJS.AES.decrypt(
      { ciphertext: ciphertext },
      key,
      { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );

    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedText) {
      throw new Error('Decryption failed, possibly due to incorrect key or corrupted data.');
    }

    return decryptedText;
  } catch (error) {
    return `Error decrypting: ${error.message}`;
  }
};

