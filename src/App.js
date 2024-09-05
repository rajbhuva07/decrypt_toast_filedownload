import React, { useState } from 'react';
import {  decryptText } from './component/basic/cryptoUtils';
import Decryment from './component/basic/Decryment';
import Download from './component/basic/Download';
import ImageDownload from './component/basic/imagedownload';
import EsimSupportChecker from './component/basic/EsimSupportChecker';

const App = () => {
 
  return (
  //  <Decryment/>
  //  <Download/>
  //  <ImageDownload/>
  <EsimSupportChecker/>
  );
};

export default App;
