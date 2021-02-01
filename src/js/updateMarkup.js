import articlesTpl from '../templates/articles.hbs';

const refs = {
  articlesContainer: document.querySelector('.js-articles'),
};

function renderMurkup(articles) {
  const markup = articlesTpl(articles);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkup;
