import styled from "../modules/ImageGallry2.module.css";

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";



const Gallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    const images = [
      {
        original: "/ps5/model2/model2S.jpg",
        thumbnail: "/ps5/model2/model2S.jpg",
      },
      {
        original: "/ps5/model2/model3.jpg",
        thumbnail: "/ps5/model2/model3.jpg",
      },
      {
        original: "/ps5/model2/model4.jpg",
        thumbnail: "/ps5/model2/model4.jpg",
      },
      {
        original: "/ps5/model2/model5.jpg",
        thumbnail: "/ps5/model2/model5.jpg",
      },
      {
        original: "/ps5/model2/model6.jpg",
        thumbnail: "/ps5/model2/model6.jpg",
      },
      {
        original: "/ps5/model2/model7.jpg",
        thumbnail: "/ps5/model2/model7.jpg",
      },
      {
        original: "/ps5/model2/model8.jpg",
        thumbnail: "/ps5/model2/model8.jpg",
      },
      // add more images here...
    ];
  
    const onImageClick = (event) => {
      const { index } = event.target.dataset;
      setSelectedImageIndex(parseInt(index, 10));
    };
  
    return (
      <div className={styled.container}>
        <img src={images[selectedImageIndex].original} alt="selected" />
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          showPlayButton={false}
          onClick={onImageClick}
        />
      </div>
    );
  };
  
  export default Gallery;