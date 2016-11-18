import { commentSERVER } from '../server';

function CommentController ($scope, $http) {
  $scope.comments = []

  $scope.addComment = function (comment) {
    $http.post(commentSERVER, comment).then(function (response) {
      let comment = resp.data;
      $scope.comments.unshift(comment);
    });
    $scope.comments = [];
  };

};

CommentController.$inject = ['$scope', '$http']
export { CommentController };
