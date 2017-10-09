angular.module('assessment').service('shopService', function($http){

var apiUrl = "https://practiceapi.devmountain.com/products"


this.getData = () => $http.get(apiUrl).then(response => {
console.log(response)
  return response.data;
})




this.getDetails = function(id){
  return $http({
    method: "GET",
    url: "https://practiceapi.devmountain.com/products/" +id
  })
}






});
