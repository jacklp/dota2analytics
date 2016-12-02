(function () {
  'use strict';

  angular
    .module('autopicker')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Autopicker',
      state: 'autopicker'
    });
  }
}());
