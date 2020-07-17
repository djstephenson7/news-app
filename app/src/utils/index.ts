import _ from 'lodash';
import moment from 'moment';

export const formatDate = (date) => {
  return moment(date).format('LLLL');
};

export const formatResults = (res) => {
  const results = [];

  res.data.forEach((el, index) => {
    results.push({
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

  return _.uniqBy(results, 'title');
};
