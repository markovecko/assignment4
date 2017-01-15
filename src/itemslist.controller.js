(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['categoryItems', 'categoryShortCode'];
function ItemsListController(categoryItems,categoryShortCode) {
  var categoryItemsList = this;
  categoryItemsList.items = categoryItems;
  categoryItemsList.shortCode = categoryShortCode;

}

})();
