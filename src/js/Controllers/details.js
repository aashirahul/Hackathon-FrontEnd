import { detailsSERVER } from '../server';
import { likeSERVER } from '../server';
import { commentSERVER } from '../server';
import { commentAddSERVER } from '../server';
import { editSERVER } from '../server';


function DetailsController ($scope, $http, $stateParams) {
  $scope.image = {};
  $scope.listComments =[];
  $scope.EditBox = false;


  function init () {
    let url = detailsSERVER +$stateParams.id;
    $http.get(url).then(function(response) {
      $scope.image = response.data;
      getComment();


    });
  };

  init();
  $scope.addlike = function(){
  	let url = likeSERVER + $scope.image.id;
  	$http.put(url, $scope.image).then(function(response){
  	 	$scope.image = response.data;


  	})
  }


  $scope.submitComment = function (comments) {
  	let url = commentAddSERVER + $scope.image.id;
    $http.post(url, comments).then(function (response) {
    	console.log(response.data);
    	let comment = response.data;
    	 $scope.listComments.unshift(comment);



    });
    };

    function getComment(){
    	let url = commentSERVER + $scope.image.id;
    	$http.get(url, $scope.comment).then(function(response){
    		console.log(response);
    		$scope.listComments=response.data;
    	})
    }

    $scope.editDescription = function (image) {
      let url = editSERVER + $scope.image.id;
      $http.put(url, $scope.image).then(function(response) {
        console.log(response);
      })

    }

    $scope.showEditBox = function () {
      $scope.EditBox = !$scope.EditBox;
  };




};

DetailsController.$inject = ['$scope', '$http', '$stateParams']
export { DetailsController };
