var Sequelize = require('sequelize');
var fs = require('fs');
var dbConf = JSON.parse(fs.readFileSync('db.conf.json', {encoding: 'utf8'}));

var dbConn = new Sequelize(dbConf.database, dbConf.username, dbConf.password, {
  host: dbConf.host,
  port: dbConf.port,
  dialect: dbConf.dialect,
  storage: dbConf.storage || null
});

var Twit = require('gittwits-models').Twit(Sequelize, dbConn);

var syncPromise = dbConn.sync();
dbConn.ready = function() {
  return syncPromise;
};

dbConn.Twit = Twit;
dbConn.Hashtag = Twit.HashTag;
dbConn.User = Twit.User;
dbConn.TwitUser = Twit.TwitUser;
dbConn.TwitHashtag = Twit.TwitHashtag;

module.exports = dbConn;