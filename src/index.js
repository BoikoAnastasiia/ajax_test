import './styles.css';
import newsService from './js/news_service';
import renderMurkup from './js/updateMarkup';

const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  spin: document.getElementById('spinner'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';

  newsService.resetPage();
  fetchArticles();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchArticles);

function fetchArticles() {
  refs.loadMoreBtn.classList.add('is-hidden');
  refs.spin.classList.remove('sr-only');
  newsService
    .fetchArticles()
    .then(articles => {
      renderMurkup(articles);
      refs.loadMoreBtn.classList.remove('is-hidden');

      window.scrollTo({
        top: 1000000000,

        behavior: 'smooth',
      });
    })
    .finally(() => refs.spin.classList.add('sr-only'));
}
