import { Component } from 'react';
// import axios from 'axios';
import { PropTypes } from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { Button } from '../Button/Button';
import Fetch from '../../servises/index';

export class ImageGallery extends Component {
  state = {
    photos: [],
    isLoading: false,
    page: 1,
    totalPages: 1,
    error: null,
  };

  componentDidMount() {
    this.getPhotos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevProps.request !== this.props.request
    ) {
      this.getPhotos();
    }

    if (prevProps.request !== this.props.request) {
      this.setState({ page: 1 });
    }
  }

  getPhotos = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await Fetch(this.props.request, this.state.page);
      if (this.state.page === 1) {
        this.setState({
          photos: response.data.hits,
          totalPages: Math.ceil(response.data.total / 12),
        });
      } else {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...response.data.hits],
        }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { photos, isLoading, page, totalPages } = this.state;
    return (
      <>
        <GalleryList id="gallary">
          {photos.map(({ webformatURL, tags, largeImageURL }, index) => {
            return (
              <ImageGalleryItem
                key={index}
                previewURL={webformatURL}
                tags={tags}
                largeUrl={largeImageURL}
              />
            );
          })}
          {isLoading && <Loader />}
        </GalleryList>
        {page < totalPages && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
};
