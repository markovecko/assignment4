(function () {
'use strict';

angular.module('Data')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories=function () {
    var httpPromise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return httpPromise.then(function(response){
        return response.data;
      });
  };

  service.getItemsForCategory=function (categoryShortCode) {
    var httpPromise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortCode)
    });

    return httpPromise.then(function(response){
        return response.data.menu_items;
      });
  };

}
})();
