function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController'
    })

    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'addController'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html',
    })

    .state('details', {
      url: '/image/:id',
      templateUrl: 'templates/details.tpl.html',
      controller: 'detailsController'
    })

    $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
