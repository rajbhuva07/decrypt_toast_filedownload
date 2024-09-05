import React, { useState } from 'react';
import { saveAs } from 'file-saver';
const normalizeFileUrl = (url, baseUrl) => {
 if (url.startsWith(baseUrl)) {
    return url.substring(baseUrl.length);
  }
 return '';
};

const DownloadButton = ({ fileUrl }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const baseUrl = "https://stagecdn.waosim.com"; 

  const handleDownload = async () => {
    setLoading(true);
    setError('');

    const normalizedUrl = normalizeFileUrl(fileUrl, baseUrl);
    if (!normalizedUrl) {
      setError('Invalid URL. Please check the URL and try again.');
      setLoading(false);
      return;
    }

    try {
      // Fetch the file from the normalized URL
      const response = await fetch(normalizedUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const blob = await response.blob();
      saveAs(blob, fileUrl.substring(fileUrl.lastIndexOf('/') + 1));
    } catch (error) {
      setError('Error downloading file. Please try again.');
      console.error('Download error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleDownload} disabled={loading}>
        {loading ? 'Downloading...' : 'Download'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

const Download = () => {
  const fileUrl = "https://stagecdn.waosim.com/backend/inquiries/6698d4fc7fe3b_media_20240206_101553_1206463892251576596 (1).jpg"; // Replace with your file URL

  return (
    <div>
      <h1>Download Example</h1>
      <DownloadButton fileUrl={fileUrl} />
    </div>
  );
};

export default Download;
