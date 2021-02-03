import './styles.css';
import newsService from './js/news_service';
import renderMurkup from './js/updateMarkup';

// fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story')
//   .then(rs => rs.json())
//   .then(data => console.log(data));

/* example with simple api */
// const options = {
//   method: 'GET',
//   headers: { Accept: 'application/json' },
// };
// fetch('https://jsonplaceholder.typicode.com/todos', options);
// fetch('https://jsonplaceholder.typicode.com/users').then(response =>
//   response.json().then(console.log),
// );

/* example with difficult API   */
// fetch('http://hn.algolia.com/api/v1/search?query=html')
//   .then(rs => rs.json())
//   .then(data => console.log(data));

/* example with news API */

// const refs = {
//   articlesContainer: document.querySelector('.js-articles'),
//   searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const inputValue = form.elements.query.value;

//   const myKey = 'fb416686c0cf4be5b520956836ebc075';
//   const url = `https://newsapi.org/v2/everything?q=${inputValue}&language=en&apiKey=${myKey}`;

//   const options = { headers: { Authorization: myKey } };

//   refs.articlesContainer.innerHTML = '';

//   fetch(url, options)
//     .then(res => res.json())
//     .then(({ articles }) => {
//       const markup = articlesTpl(articles);
//       refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
//     })
//     .catch(error => console.log(error));
// });

/*  refactoring the function */

const refs = {
  articlesContainer: document.querySelector('.js-articles'),
  searchForm: document.querySelector('.js-search-form'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';

  newsService.resetPage();

  newsService.fetchArticles().then(renderMurkup);
  form.reset();
});

/* adding load more btn bad option */

refs.loadMoreBtn.addEventListener('click', () => {
  newsService.fetchArticles().then(renderMurkup);
});
