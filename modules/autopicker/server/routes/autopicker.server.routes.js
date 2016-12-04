'use strict';

/**
 * Module dependencies
 */
var autopickerPolicy = require('../policies/autopicker.server.policy'),
  autopicker = require('../controllers/articles.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/autopicker').all(autopickerPolicy.isAllowed)
    .post(autopicker.create)
    .get(autopicker.read)
    .put(autopicker.update)
    .delete(autopicker.delete);

  // Single article routes
  //app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)


  // Finish by binding the article middleware
  //app.param('articleId', articles.articleByID);
};
