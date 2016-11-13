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
               imageid: id,
            };
            vm.likedPhoto = API.likeImage(obj);
            photo.likes++;
         }

         vm.onClickDetails = function(id) {
            // need to open the link to the specific image id here to make it go to the photo details page for that image
         }
         vm.submit = function(photo) {
            let newImage = {
               title: photo.phototitle,
               description: photo.photodescription,
               url: photo.photourl
            };
            vm.photos = API.createImage(newImage);
            vm.form = {};
            $("input").val("");
         }
      });
})();
