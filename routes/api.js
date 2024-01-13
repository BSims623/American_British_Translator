'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text } = req.body;
      const { locale } = req.body;
      if (text === undefined || locale === undefined) return res.status(200).json({ error: 'Required field(s) missing' });
      if (text.length === 0) return res.status(200).json({ error: "No text to translate" });
      if (locale !== 'american-to-british' && locale !== 'british-to-american') return res.status(200).json({ error: "Invalid value for locale field" });
      let result;
      if (locale === 'american-to-british') result = translator.americanToBritish(text);
      else result = translator.britishToAmerican(text);
      res.status(200).json(result)
    });
};
