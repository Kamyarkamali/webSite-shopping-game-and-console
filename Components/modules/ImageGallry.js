import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "../modules/ImageGallry.module.css";



const Gallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    const images = [
      {
        original: "/ps5/model1/model1.jpg",
        thumbnail: "/ps5/model1/model1.jpg",
      },
      {
        original: "/ps5/model1/model2.jpg",
        thumbnail: "/ps5/model1/model2.jpg",
      },
      {
        original: "/ps5/model1/model3.jpg",
        thumbnail: "/ps5/model1/model3.jpg",
      },
      {
        original: "/ps5/model1/model4.jpg",
        thumbnail: "/ps5/model1/model4.jpg",
      },
      {
        original: "/ps5/model1/model5.jpg",
        thumbnail: "/ps5/model1/model5.jpg",
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