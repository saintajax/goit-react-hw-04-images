import { PropTypes } from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { previewURL, tags, largeUrl } = this.props;
    return (
      <GalleryItem onClick={this.toggleModal}>
        <GalleryImg src={previewURL} alt={tags} />
        {isModalOpen && (
          <Modal src={largeUrl} name={tags} toggleModal={this.toggleModal} />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
};
