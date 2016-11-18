(function(window, angular, undefined) {

  angular.module('map')
  .controller('mapCtrl', ['NgMap', 'cameraService', '$window',
    function(NgMap, cameraService, $window) {

    var vm = this;
    vm.cameras = [];

    // Display map
    NgMap.getMap().then(function(map) {
      vm.map = map;
    });


    // Populate map with cameras
    cameraService.getCameras().then(function(data) {
      vm.cameras.push(data);
    });


    // Show info window on click
    vm.showDetail = function(e, camera) {
      vm.camera = camera;
      vm.map.showInfoWindow('camera', camera.id);
    };

    // Open info window upon click
    vm.placeCamera = function(e) {
      vm.map.showInfoWindow('newCamera', e.latLng);
      vm.lat = e.latLng.lat();
      vm.lng = e.latLng.lng();

    }

    // Allow user to add camera to map
    vm.createNewCamera = function(e) {
      var cameraData = {
        location: [vm.lat, vm.lng],
        info: vm.formData.info,
        rating: 0,
      };
      console.log(cameraData);

      cameraService.postCamera(cameraData)
        .then(function(data) {
          console.log('camera posted');
        })
        .catch(function(data) {
          console.error('error: ' + data);
        });

      vm.lat, vm.lng = 0;
      vm.formData = "";
    }


    // Vote on camera
    vm.voteUp = function(e, camera) {
      vm.camera.votes += 1;
      console.log(vm.camera.votes);
      cameraService.vote(vm.camera).then(function(data) {
        console.log(data);
      });
    }

    vm.voteDown = function() {
      vm.camera.votes -= 1;
      console.log(vm.camera.votes);
      cameraService.vote(vm.camera).then(function(data) {
        console.log(data);
      });
    }


  }])

})(window, window.angular);
