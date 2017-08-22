(function () {
  angular.module('drivingApp').controller('homeController', homeController);
  homeController.$inject = ['$scope', '$state'];

  function homeController($scope, $state) {
    $scope.goToSearch = function (query) {
      if (query) {
        $state.go('search', {
          query: query
        });
      }
    }
  }

})();
