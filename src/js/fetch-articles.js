const myKey = 'fb416686c0cf4be5b520956836ebc075';

function fetchArticles(searchQuery) {
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${myKey}`;

  const options = { headers: { Authorization: myKey } };
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.articles)
    .catch(error => console.log(error));
}
export default fetchArticles;
