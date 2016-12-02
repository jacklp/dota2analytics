(function (app) {
  'use strict';

  app.registerModule('autopicker', ['core']);
  app.registerModule('autopicker.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
