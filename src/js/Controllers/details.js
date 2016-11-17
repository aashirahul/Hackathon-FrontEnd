import { SERVER } from '../server';

function DetailsController ($scope, $http, $stateParams) {
  $scope.image = {};

  function init () {
    let url = SERVER + $stateParams.id;
    $http.get(url).then(function(response) {
      $scope.image = response.data;
    });
  };

  init();

};

DetailsController.$inject = ['$scope', '$http', '$stateParams']
export { DetailsController };
