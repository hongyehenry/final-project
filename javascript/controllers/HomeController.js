app.controller('HomeController', ['$scope','activities', function($scope,activities) {
  activities.success(function(data){
    $scope.activities = data;
  });
}]);