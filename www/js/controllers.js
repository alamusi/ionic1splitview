angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatListCtrl', function($scope, $stateParams, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.activated = 'activated';
  $scope.selected = function(chat) {
    if (parseInt($stateParams.chatId) === chat.id) {
      return 'activated';
    }
  };
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  if (!Chats.get($stateParams.chatId)) {
    $stateParams.chatId = Chats.all()[0].id;
  }
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
