import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { Button } from '../Button/Button';
import Fetch from '../../servises/index';

export const ImageGallery = ({ request }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [request]);

  useEffect(() => {
    if (page !== 1) {
      const halfVH = window.innerHeight * 0.5;
      window.scrollBy({
        top: halfVH,
        behavior: 'smooth',
      });
    }
  });

  useEffect(() => {
    const getPhotos = async () => {
      setIsLoading(true);
      try {
        const response = await Fetch(request, page);
        if (page === 1) {
          setPhotos(response.data.hits);
          setTotalPages(Math.ceil(response.data.total / 12));
        } else {
          setPhotos(prev => [...prev, ...response.data.hits]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [page, request]);

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
      {page < totalPages && <Button loadMore={loadMore} />}
    </>
  );
};

ImageGallery.propTypes = {
  request: PropTypes.string.isRequired,
};
