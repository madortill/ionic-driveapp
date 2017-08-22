(function(){
  angular.module("drivingApp").controller('resultController', resultController);
  
  resultController.$inject = ['$scope', 'DataService'];
  function resultController($scope, DataService){
    $scope.result = DataService.result;
    $scope.pdfUrl= "./data/" + $scope.result.path + ".pdf";
  }
})();