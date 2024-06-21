import React, { useState } from 'react';
import ImageItem from './ImageItem';
import ImageModal from './ImageModal';
import './ImageGallery.css';

// Ensure the paths are correct
const images = [
  'image-1.jpeg',
  'image-2.jpeg',
  'image-3.jpg',
  'image-5.png',
  'image-7.jpeg',
  'image-6.webp',
  'image-4.jpeg',
  'image-8.jpeg',
  // Add more images as needed
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageItem key={index} image={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
