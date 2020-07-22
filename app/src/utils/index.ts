import _ from 'lodash';
import moment from 'moment';

export const formatDate = (date) => {
  return moment(date).format('LLLL');
};

export const formatResults = (res) => {
  const results = [];

  res.data.forEach((el, index) => {
    el.description &&
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

export const newsDomains = [
  {
    value: 'bbc-news',
    label: 'BBC News',
  },
  {
    value: 'cbs-news',
    label: 'CBS News',
  },
  {
    value: 'cnn',
    label: 'CNN',
  },
  {
    value: 'financial-times',
    label: 'Financial Times',
  },
  {
    value: 'google-news',
    label: 'Google News',
  },
  {
    value: 'the-huffington-post',
    label: 'Huffington Post',
  },
  {
    value: 'ign',
    label: 'IGN',
  },
  {
    value: 'techcrunch',
    label: 'TechCrunch',
  },
  {
    value: 'the-globe-and-mail',
    label: 'The Globe And Mail',
  },
  {
    value: 'the-hill',
    label: 'The Hill',
  },
  {
    value: 'the-verge',
    label: 'The Verge',
  },
  {
    value: 'the-washington-post',
    label: 'Washington Post',
  },
];
