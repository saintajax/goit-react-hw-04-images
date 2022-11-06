import { PropTypes } from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ previewURL, tags, largeUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(() => false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <GalleryItem>
      <GalleryImg src={previewURL} alt={tags} onClick={toggleModal} />
      {isModalOpen && (
        <Modal src={largeUrl} name={tags} toggleModal={toggleModal} />
      )}
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
};
