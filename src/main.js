import './css/css-loader.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.js-form');

// ============= event ==========================
form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const query = formData.get('search-text').trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topRight',
      icon: false,
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length > 0) {
        createGallery(data.hits);
      } else {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: '#98a8d4ff',
          icon: false,
        });
      }
    })
    .catch(() => {
      iziToast.error({
        message: 'Error fetching images. Please try again later.',
        position: 'topRight',
        icon: false,
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});
