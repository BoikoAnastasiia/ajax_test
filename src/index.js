import './styles.css';
import fetchArticles from './js/fetch-articles.js';
import renderMurkup from './js/updateMarkup';

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
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;

  refs.articlesContainer.innerHTML = '';

  form.reset();
  fetchArticles(inputValue).then(renderMurkup);
});

fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story')
  .then(rs => rs.json())
  .then(data => console.log(data));
