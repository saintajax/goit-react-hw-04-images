import { Component } from 'react';
import { Box } from './Box/Box';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    request: '',
  };

  handleSerachFormSubmit = request => {
    this.setState(request);
  };

  render() {
    const { request } = this.state;
    return (
      <Box display="grid" grid-template-columns="1fr" grid-gap="16px" pb="24px">
        <SearchBar onSubmit={this.handleSerachFormSubmit} />
        <ImageGallery request={request} />
      </Box>
    );
  }
}
