import { homeSERVER } from '../server';
import { likeSERVER } from '../server';

function HomeController ($scope, $http,$stateParams) {
  $scope.images = []
 
 

  function init () {
    $http.get(homeSERVER).then(function(response) {
      $scope.images = response.data;
    })
  };

  init();

  $scope.addlike = function(img){
  	img.like += 1;
  	let url = likeSERVER + img.id;
  	$http.put(url, img).then(function(response){

  	})
  }
};

HomeController.$inject = ['$scope', '$http','$stateParams']
export { HomeController };
