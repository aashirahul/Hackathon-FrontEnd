function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })

    .state('details', {
      url: '/',
      templateUrl: 'templates/details.tpl.html',
      controller: 'detailsController'
    })

    .state('add', {
      url: '/',
      templateUrl: 'templates/add.tpl.html',
      controller: 'addController'
    })

    .state('about', {
      url: '/',
      templateUrl: 'templates/about.tpl.html',
    })
    
    $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
