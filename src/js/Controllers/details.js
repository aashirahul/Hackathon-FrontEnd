import { detailsSERVER } from '../server';
import { likeSERVER } from '../server';

function DetailsController ($scope, $http, $stateParams) {
  $scope.image = {};

  function init () {
    let url = detailsSERVER +$stateParams.id;
    $http.get(url).then(function(response) {
      $scope.image = response.data;
      
    });
  };

  init();
  $scope.addlike = function(img){
  	img.like += 1;
  	let url = likeSERVER + img.id;
  	$http.put(url, img).then(function(response){

  	})
  }

};

DetailsController.$inject = ['$scope', '$http', '$stateParams']
export { DetailsController };
