angular.module('assessment').controller('shopCtrl', function($scope, shopService){

shopService.getData().then(function(response){

   $scope.products = response
});




});
