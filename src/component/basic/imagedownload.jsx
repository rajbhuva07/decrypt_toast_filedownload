import React, { useState } from 'react';

const imageList = [
  {
    image: "66965b77b29e1_668f57c0cbc58_waosim-India-12406181510091501701 (1).png",
    image_url: "https://stagecdn.waosim.com/backend/inquiries/6698d4fc7fe3b_media_20240206_101553_1206463892251576596 (1).jpg"
  },
  {
    image: "66965b77e2a53_waosim-French Guiana-12406271249100281973 (5).png",
    image_url: "https://stagecdn.waosim.com/backend/inquiries/6698d4fc7fe3b_media_20240206_101553_1206463892251576596 (1).jpg"
  },
  {
    image: "66965b77f17e3_waosim-French Guiana-12406271249100281973 (4).png",
    image_url: "https://stagecdn.waosim.com/backend/inquiries/6698d4fc7fe3b_media_20240206_101553_1206463892251576596 (1).jpg"
  },
  {
    image: "66965b7807256_waosim-French Guiana-12406271249100281973 (3).png",
    image_url: "https://stagecdn.waosim.com/backend/inquiries/6698d4fc7fe3b_media_20240206_101553_1206463892251576596 (1).jpg"
  },
  {
    image: "66965b7815a66_waosim-French Guiana-12406271249100281973 (2).png",
    image_url: "https://stagecdn.waosim.com/backend/inquiries/6698d4fc7fe3b_media_20240206_101553_1206463892251576596 (1).jpg"
  }
];

const ImageDownload = () => {
  const [loading, setLoading] = useState(Array(imageList.length).fill(false));

  const downloadImage = async (imageUrl, index) => {
    setLoading(prevState => {
      const newLoading = [...prevState];
      newLoading[index] = true;
      return newLoading;
    });

    try {
      const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const response = await fetch(`${corsProxyUrl}${imageUrl}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', imageUrl.substring(imageUrl.lastIndexOf('/') + 1));
      document.body.appendChild(link)
;
      link.click();
      document.body.removeChild(link)
;
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setLoading(prevState => {
        const newLoading = [...prevState];
        newLoading[index] = false;
        return newLoading;
      });
    }
  };

  return (
    <div>
      {imageList.map((image, index) => (
        <div key={index} style={{display:'flex'}}>
          <div>{image.image}</div>
          <div>
             <button onClick={() => downloadImage(image.image_url, index)}>
            {loading[index] ? 'Loading...' : 'Download'}
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageDownload;