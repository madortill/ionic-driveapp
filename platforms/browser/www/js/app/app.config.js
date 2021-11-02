(function(){
  //App's routing config page
  angular.module('drivingApp').config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
                 
            //Basic app pages (home)
      .state('home', {
                url: '/home',
                templateUrl: 'js/pages/home/home.tpl.html',
                controller: 'homeController'
            })

      .state('search', {
                url: '/search/:query',
                templateUrl: 'js/pages/search/search.tpl.html',
                controller: 'searchController'
            })

      .state('result', {
                url: '/result',
                templateUrl: 'js/pages/result/result.tpl.html',
                controller: 'resultController'
            })

      .state('credit', {
                url: '/credit',
                templateUrl: 'js/pages/credit/credit.tpl.html',
                controller: 'resultController'
            })

        $urlRouterProvider.when('/', '/home');
        $urlRouterProvider.otherwise('/home');
  }
})();