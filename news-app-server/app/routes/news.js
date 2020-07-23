const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('3642184ca7bb4ad8a0ba1ef6178c3396');

const express = require('express');
const router = express();

router.get('/', async (req, res) => {
  try {
    const results = await newsapi.v2.topHeadlines({ language: 'en' });

    res.send(results.articles);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  const { query, source, language } = req.body;
  try {
    const results = await newsapi.v2.everything({
      q: query,
      sources: source,
      language,
    });

    res.send(results.articles);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
