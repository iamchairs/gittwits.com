var express = require('express');
var router = express.Router();

/* GET view. */
router.get(/.*.template/, function(req, res, next) {
  var file = req.originalUrl.split('/').pop();
  res.render(file + '.jade');
});

module.exports = router;
