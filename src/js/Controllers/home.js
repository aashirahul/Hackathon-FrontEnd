import { homeSERVER } from '../server';
import { likeSERVER } from '../server';

function HomeController ($scope, $http,$stateParams) {
  $scope.images = []
  $scope.reloadHome =function(){
  	init ();
  }
 

  function init () {
  	console.log('init');
    $http.get(homeSERVER).then(function(response) {
      $scope.images = response.data;
    })
  };

  init();


};

HomeController.$inject = ['$scope', '$http','$stateParams']
export { HomeController };
