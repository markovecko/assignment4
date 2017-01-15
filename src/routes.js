(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/templates/main-categories.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items-list/{categoryShortCode}',
    templateUrl: 'src/templates/main-items.template.html',
    controller: 'ItemsListController as categoryItemsList',
    resolve: {
      categoryItems: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortCode);
            }],
      categoryShortCode : ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return $stateParams.categoryShortCode;
            }]
    }
  });

};
})();
