var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var database = require('../services/database.service')

/* GET home page. */
router.get('/', function(req, res, next) {
  var limit = 50;
  var result = [];
  var where = {};
  var search = req.query.s;

  if(search) {
    var field = 'message';
    if(search[0] === '@') {
      search = search.substr(1, search.length-1);
      field = 'username';
    }

    where = [field + ' like ?', '%' + search + '%'];
  }

  database.Twit.findAll({
    where: where,
    order: [['time', 'DESC']],
    include: [
      {model: database.Twit.User, as: 'Author'}
    ]}).then(function(dbRes) {
      for(var i = 0; i < dbRes.length; i++) {
        result.push(dbRes[i].dataValues);
      }

      res.send(result);
    });
});

module.exports = router;
