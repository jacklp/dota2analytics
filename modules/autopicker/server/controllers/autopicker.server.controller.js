'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Autopicker = mongoose.model('Autopicker'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
