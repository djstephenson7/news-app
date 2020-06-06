const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('3642184ca7bb4ad8a0ba1ef6178c3396');

const express = require('express');
const router = express();

router.get('/', async (req, res) => {
  try {
    const results = await newsapi.v2.topHeadlines({
      q: 'trump',
      language: 'en',
    });
    res.send(results.articles);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
