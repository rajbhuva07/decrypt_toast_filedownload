import React, { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

// List of eSIM supported devices
const esimSupportedDevices = [
  { brand: 'Apple', models: ['iPhone XR', 'iPhone XS', 'iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14'] },
  { brand: 'Google', models: ['Pixel 3', 'Pixel 4', 'Pixel 5', 'Pixel 6'] },
  { brand: 'Samsung', models: ['Galaxy S20', 'Galaxy S21', 'Galaxy Z Fold 3'] },
  // Add more devices as needed
];

// Utility function to get device information using ua-parser-js
const getDeviceInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  const deviceModel = result.device.model || 'Unknown';
  const osName = result.os.name || 'Unknown';
  return { deviceModel, osName };
};

// Function to check if a device supports eSIM
const isEsimSupported = (deviceModel) => {
  for (const device of esimSupportedDevices) {
    if (device.models.includes(deviceModel)) {
      return true;
    }
  }
  return false;
};

const EsimSupportChecker = () => {
  const [deviceInfo, setDeviceInfo] = useState({});
  const [esimSupported, setEsimSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const info = getDeviceInfo();
      setDeviceInfo(info);
      setEsimSupported(isEsimSupported(info.deviceModel));
    }
  }, []);

  return (
    <div>
      <h1>Device Information</h1>
      <p>Device Model: {deviceInfo.deviceModel}</p>
      <p>Operating System: {deviceInfo.osName}</p>
      {esimSupported ? (
        <p>Your device supports eSIM!</p>
      ) : (
        <p>Your device does not support eSIM.</p>
      )}
    </div>
  );
};

export default EsimSupportChecker;
