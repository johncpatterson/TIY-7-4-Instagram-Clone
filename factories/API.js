(function() {
   angular
      .module('hipstagram')
      .factory('API', function($http) {

         // Instagram API
         // create Image
         const createImage = function(newImage) {
            var call = $http({
               method: 'POST',
               data: newImage,
               headers: { 'X_CSRF_TOKEN': 'patterson' },
               url: 'http://instagramcloneclass.herokuapp.com/image/post'
            });
            return call;
         }
         // get all Images
         const getImages = function() {
            var call = $http({
               method: 'GET',
               headers: { 'X_CSRF_TOKEN': 'patterson' },
               url: 'http://instagramcloneclass.herokuapp.com/images'
            });
            return call;
         }
         // like an Image
         const likeImage = function(imageid) {
            var call = $http({
               method: 'POST',
               data: imageid,
               headers: { 'X_CSRF_TOKEN': 'patterson' },
               url: 'http://instagramcloneclass.herokuapp.com/images/vote'
            });
            return call;
         }
         // get a single Image (when clicking the image on the home page)
         const getSingleImage = function(id) {
            var call = $http({
               method: 'GET',
               headers: { 'X_CSRF_TOKEN': 'patterson' },
               url: `http://instagramcloneclass.herokuapp.com/images/${id}`
            });
            return call;
         }

         return {
            createImage,
            getImages,
            likeImage,
            getSingleImage
         }
      });
})();
