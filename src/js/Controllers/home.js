import { homeSERVER } from '../server';
import { likeSERVER } from '../server';

function HomeController ($scope, $http,$stateParams) {
  $scope.images = []
 
 

  function init () {
    $http.get(homeSERVER).then(function(response) {
      $scope.images = response.data;
      console.log(response.data)
    })
  };

  init();


};

HomeController.$inject = ['$scope', '$http','$stateParams']
export { HomeController };
