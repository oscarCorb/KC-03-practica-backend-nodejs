var express = require('express');
var router = expess.Router();

router.ger('/:locale', function (req, res, next) {
  const locale = req.params.locale;

  res.cookie('nodeapi-locale', locale, {
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });

  res.redirect(req.get('referer'));
});

module.exports = router;
