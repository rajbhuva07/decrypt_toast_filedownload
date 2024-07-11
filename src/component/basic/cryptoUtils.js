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

const secretKey = 'veHDKFJRVWEPWU9E';
const iv = 'veHDKFJRVWEPWU9E';

export const decryptText = (encryptedText) => {
  try {
    // Decode Base64 encoded ciphertext
    const ciphertextBytes = CryptoJS.enc.Base64.parse(encryptedText);
    // Decode the IV
    const ivBytes = CryptoJS.enc.Utf8.parse(iv);

    // Decrypt using AES
    const decryptedBytes = CryptoJS.AES.decrypt(
      { ciphertext: ciphertextBytes },
      CryptoJS.enc.Utf8.parse(secretKey),
      { iv: ivBytes, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );

    // Convert bytes to UTF-8 string
    const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedText;
  } catch (error) {
    return `Error decrypting: ${error.message}`;
  }
};
