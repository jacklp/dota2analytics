(function () {
  'use strict';

  angular
    .module('chat')
    .controller('AutopickerController', AutopickerController);

  AutopickerController.$inject = ['$scope', '$state', 'Authentication', 'Socket'];

  function AutopickerController($scope, $state, Authentication, Socket) {
    var vm = this;

    init();

    function init() {
      // If user is not signed in then redirect back home
      if (!Authentication.user) {
        $state.go('home');
      }

      // Make sure the Socket is connected
      if (!Socket.socket) {
        Socket.connect();
      }

      // Add an event listener to the 'chatMessage' event
      Socket.on('startMatch', function (message) {

        //load up the match
      });

      // Remove the event listener when the controller instance is destroyed
      $scope.$on('$destroy', function () {
        Socket.removeListener('chatMessage');
      });
    }

    // Create a controller method for sending messages
    function sendMessage() {
      // Create a new message object
      var message = {
        text: vm.messageText
      };

      // Emit a 'chatMessage' message event
      Socket.emit('chatMessage', message);

      // Clear the message text
      vm.messageText = '';
    }
  }
}());
