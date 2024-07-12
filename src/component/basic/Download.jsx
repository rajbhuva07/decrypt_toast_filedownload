import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
const DownloadButton = ({ fileUrl }) => {
    // const handleDownload = async () => {
    //     try {
    //       // Fetch the file using Axios
    //       const response = await axios.get(`https://api.allorigins.win/raw?url=${encodeURIComponent(fileUrl)}`, {
    //         responseType: 'blob', 
    //       });
    //   saveAs(response.data, fileUrl.substring(fileUrl.lastIndexOf('/') + 1));
    
    //     } catch (error) {
    //       console.error('Error downloading file:', error);
    //     }
    //   };
    const handleDownload = () => {
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(fileUrl)}`;
      
        fetch(proxyUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob();
          })
          .then((blob) => {
            saveAs(blob, fileUrl.substring(fileUrl.lastIndexOf('/') + 1));
          })
          .catch((error) => {
            console.error('Error downloading file:', error);
          });
      };
    return (
      <button onClick={handleDownload}>Download</button>
    );
  };
  const Download = () => {
    const fileUrl = "https://stagecdn.waosim.com/backend/pdf/payment-receipt-pi_3PbJkIA5ytHoKarb1pcCir6G.pdf";
  
    return (
      <div>
        <h1>Download Example</h1>
        <DownloadButton fileUrl={fileUrl} />
      </div>
    );
  };
  
  export default Download;