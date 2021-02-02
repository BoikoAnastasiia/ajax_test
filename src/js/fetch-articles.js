const myKey = 'fb416686c0cf4be5b520956836ebc075';

export default {
  fetchArticles(searchQuery, page = 1) {
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&page=${page}&apiKey=${myKey}`;

    const options = { headers: { Authorization: myKey } };
    return fetch(url, options)
      .then(res => res.json())
      .then(data => data.articles)
      .catch(error => console.log(error));
  },
};

// export default fetchArticles;
