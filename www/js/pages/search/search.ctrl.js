(function () {
  angular.module('drivingApp').controller('searchController', searchController);
  searchController.$inject = ['$scope', '$stateParams', '$state', 'DataService'];

  function searchController($scope, $stateParams, $state, DataService) {
    $scope.query = $stateParams.query;
    $scope.results = [];

    $scope.searchFunc = function (query) {
      // If empty do nothing
      if (!query)
        return;

      // RegExp pattern
      var pattern = new RegExp(query);

      //List of all regulations
      var regulations = DataService.regulations;

      //List to be returned with the relevant search results
      var relevantReg = [];

      // Run on each regulation and test it against the search result
      regulations.forEach(function (regulation) {
        // Test against regulation name
        if (pattern.test(regulation.name)) {
          relevantReg.push({
            name: regulation.name,
            path: regulation.path,
            regPage: 1
          });
        }

        // Test against sub titles
        regulation.subTitles.forEach(function (subTitle) {
          if (pattern.test(subTitle.term)) {
            relevantReg.push({
              name: regulation.name,
              path: regulation.path,
              subTitle: subTitle.term,
              regPage: subTitle.page
            });
          }
        });
      });
      return relevantReg;
    }

    $scope.onclickfunc = function () {
      if ($scope.query)
        $scope.results = $scope.searchFunc($scope.query);
    }

    $scope.goToResult = function (result) {
      DataService.result = result;
      $state.go('result');
    }

    // Run on page load
    angular.element(window.document.body).ready(function () {
      $scope.results = $scope.searchFunc($scope.query);
    });


  }

})();
