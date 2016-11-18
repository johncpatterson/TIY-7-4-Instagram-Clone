(function() {
    $.fn.extend({
      animateCss: function(animationName) {
         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
         this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
         });
      }
   });


   angular
      .module('hipstagram')
      .controller('PhotoController', function(API, $state, $stateParams) {
         let vm = this;

         let photos = API.getImages();
         photos.then(function(returnedPhotos) {
            vm.photos = returnedPhotos.data.images;
         })

         vm.onClickLike = function(id, photo,e) {
            let obj = {
               imageid: id,
            };
            vm.likedPhoto = API.likeImage(obj);
            photo.likes++;
            if (photo._id === id) {
              $(`img[data-id="${id}"]`).animateCss('tada'); 
            }
            
         }

         vm.onClickDetails = function(id, photo) {
            $state.go('details', { _id: id });
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
         }
      })

	   .controller('IDController', function(API, $state, $stateParams) {
	      let vm = this;

	      let id = $stateParams._id;

	      let photo = API.getSingleImage(id);
		      photo.then(function(returnedPhotos) {
		      console.log(returnedPhotos);
		      vm.photo = returnedPhotos.data;
	      })
	   });
})();
