(function () {
'use strict';

angular.module('Data')
.component('itemsList', {
  templateUrl: 'src/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
