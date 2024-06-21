import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image} alt="" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
