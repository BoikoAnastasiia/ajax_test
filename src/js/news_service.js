import '../styles.css';

const myKey = 'fb416686c0cf4be5b520956836ebc075';

export default {
  searchQuerry: '',
  page: 1,
  fetchArticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&page=${this.page}&pageSize=10&apiKey=${myKey}`;

    const options = { headers: { Authorization: myKey } };
    return fetch(url, options)
      .then(res => res.json())
      .then(({ articles }) => {
        this.page++;
        return articles;
      })
      .catch(error => console.log(error));
  },
  get query() {
    return this.searchQuerry;
  },
  set query(newQuery) {
    this.searchQuerry = newQuery;
  },
  resetPage() {
    this.page = 1;
  },
};
