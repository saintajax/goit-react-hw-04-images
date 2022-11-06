import { Box } from './Box/Box';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useState } from 'react';

export const App = () => {
  const [request, setRequest] = useState('');

  const handleSerachFormSubmit = ({ request }) => {
    setRequest(request);
  };

  return (
    <Box display="grid" grid-template-columns="1fr" grid-gap="16px" pb="24px">
      <SearchBar onSubmit={handleSerachFormSubmit} />
      <ImageGallery request={request} />
    </Box>
  );
};
