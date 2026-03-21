import './css/css-loader.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formElem: document.querySelector('.js-form'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let page = 1;
let currentQuery = '';

// ============= event ==========================
refs.formElem.addEventListener('submit', async e => {
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

  currentQuery = query;
  page = 1;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    if (data.hits.length > 0) {
      createGallery(data.hits);
      showLoadMoreButton();
    } else {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: '#98a8d4ff',
        icon: false,
      });
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'Error fetching images. Please try again later.',
      position: 'topRight',
      icon: false,
    });
  } finally {
    hideLoader();
  }

  refs.formElem.reset();
});

// ============= load more btn ==========================

refs.loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    createGallery(data.hits);

    if (data.hits.length === 0) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch {
    iziToast.error({
      message: 'Error fetching more images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
