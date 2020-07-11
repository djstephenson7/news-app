import _ from 'lodash';

import newsAPI from '../api/newsAPI';
import createDataContext from './createDataContext';

const newsReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_news':
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

const fetchNews = (dispatch) => async () => {
  const storage = [];
  const res = await newsAPI.get('/news');

  res.data.forEach((el, index) => {
    storage.push({
      key: index + 1,
      author: el.author,
      publishedAt: el.publishedAt,
      urlToImage: el.urlToImage,
      title: el.title,
      data: [el.description],
      content: el.content,
      source: el.source,
      url: el.url,
    });
  });

  const results = _.uniqBy(storage, 'title');

  dispatch({ type: 'fetch_news', payload: results });
};

export const { Provider, Context } = createDataContext(
  newsReducer,
  { fetchNews },
  { results: [] }
);
