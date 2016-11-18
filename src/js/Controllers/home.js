import { homeSERVER } from '../server';

function HomeController ($scope, $http) {
  $scope.images = []
  // $scope.image = {}

  function init () {
    $http.get(homeSERVER).then(function(response) {
      $scope.images = response.data;
    })
  };

  init();
};

HomeController.$inject = ['$scope', '$http']
export { HomeController };
