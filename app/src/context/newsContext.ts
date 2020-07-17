import newsAPI from '../api/newsAPI';
import { formatResults } from '../utils';
import createDataContext from './createDataContext';

const newsReducer = (state, action) => {
  switch (action.type) {
    case 'display_news':
      return { ...state, results: action.payload };
    case 'clear_news':
      return { ...state, results: [] };
    default:
      return state;
  }
};

const fetchNews = (dispatch) => async () => {
  try {
    const res = await newsAPI.get('/news');
    const formattedResults = formatResults(res);

    dispatch({ type: 'display_news', payload: formattedResults });
  } catch (error) {
    dispatch({ type: 'error', payload: 'Something went wrong' });
  }
};

const searchNews = (dispatch) => async (query) => {
  try {
    const res = await newsAPI.post('/news', { query });
    const formattedResults = formatResults(res);

    dispatch({ type: 'display_news', payload: formattedResults });
  } catch (error) {
    dispatch({ type: 'error', payload: 'Something went wrong' });
  }
};

const clearNews = (dispatch) => () => {
  dispatch({ type: 'clear_news' });
};

export const { Provider, Context } = createDataContext(
  newsReducer,
  { clearNews, fetchNews, searchNews },
  { results: [] }
);
