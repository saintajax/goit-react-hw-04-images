import axios from 'axios';

async function pictureFetch(q = '', page = 1) {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const AUTH_KEY = '30362684-6931a6e7ba0508128f5876ff1';
  const response = await axios.get(``, {
    params: {
      q,
      page,
      key: AUTH_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response;
}

export default pictureFetch;
