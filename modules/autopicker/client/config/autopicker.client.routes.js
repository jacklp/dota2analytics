(function () {
  'use strict';

  angular
    .module('chat.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('autopicker', {
        url: '/autopicker',
        templateUrl: '/modules/autopicker/client/views/autopicker.client.view.html',
        controller: 'AutopickerController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Autopicker'
        }
      });
  }
}());
