angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService){

console.log($stateParams.id)
shopService.getDetails($stateParams.id).then(function(response){
    console.log(response.data)
     $scope.product = response.data
  });



})
