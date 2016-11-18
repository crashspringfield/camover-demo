(function(window, angular, undefined) {

  angular.module('camoverRoutes', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      // ==================== Interactive states ===============
      // for map
        .state('map', {
          url: '/',
          templateUrl: 'app/map/map.html',
          controller: 'mapCtrl as vm'
        })
        .state('camera', {
          url: '/camera',
          templateUrl: 'app/camera/camera.html',
          controller: 'cameraCtrl'
        })
        // ================== Non-interactive states =================
        .state('about', {
          url: '/about',
          templateUrl: 'app/views/about.html',
          controller: ''
        })
        .state('contribute', {
          url: '/contribute',
          templateUrl: 'app/views/contribute.html',
          controller: ''
        })
        .state('references', {
          url: '/references',
          templateUrl: 'app/views/references.html',
          controller: ''
        })
    }])

})(window, window.angular);
