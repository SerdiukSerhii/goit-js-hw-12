import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export function getImagesByQuery(query) {
  return axios
    .get('/api/', {
      params: {
        key: '55023581-b8ae6332fd3af068fbd1cd850',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 40,
      },
    })
    .then(response => response.data);
}
