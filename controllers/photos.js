(function() {
   angular
      .module('hipstagram')
      .controller('PhotoController', function(API, $state, $stateParams) {
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

         vm.onClickDetails = function(id, photo) {
            $state.go('details',{_id:});
         }

         vm.submit = function(photo) {
            let newImage = {
               title: photo.phototitle,
               description: photo.photodescription,
               url: photo.photourl
            };
            vm.photos = API.createImage(newImage);
            vm.form = {};
            window.location.assign("/#/")
               // $("#photoTitle").val("");
               // $("#photoURL").val("");
               // $("#photoDescription").val("");
         }
      });


	   .controller('IDController', function(API, $state, $stateParams) {
	      let vm = this;

	      let id = $stateParams._id;
	   });

})();
