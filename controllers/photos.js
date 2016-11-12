(function() {
   angular
      .module('hipstagram')
      .controller('PhotoController', function(API) {
         let vm = this;

         let photos = API.getImages();
         photos.then(function(returnedPhotos) {
            console.log(returnedPhotos);
            vm.photos = returnedPhotos.data.images;
         })

         vm.onClickLike = function(id, photo) {
            let obj = {
               imageid = id,
            };
            vm.likedPhoto = API.likeImage(obj);
            photo.likes++;
         }

         vm.onClickDetails = function(id) {
         	
         }
      });
})();
