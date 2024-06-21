import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, onClick }) => {
  return (
    <div className="image-item" onClick={onClick}>
      <img src={image} alt="" />
    </div>
  );
};

export default ImageItem;
