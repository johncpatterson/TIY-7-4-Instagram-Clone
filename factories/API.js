(function() {
   angular
      .module('hipstagram')
      .factory('API', function($http) {
         // var images = [];

         // Instagram API
         const createImage = function(newImage) {
            var call = $http({
               method: 'POST',
               data: newImage,
               headers: { 'X_CSRF_TOKEN': 'patterson' },
               url: 'http://instagramcloneclass.herokuapp.com/image/post'
            });
            return call;
         }
         const getImages = function() {
            var call = $http({
               method: 'GET',
               headers: { 'X_CSRF_TOKEN': 'patterson' },
               url: 'http://instagramcloneclass.herokuapp.com/images'
            });
            return call;
         }
         const likeImage = function(imageid) {
            var call = $http({
               method: 'POST',
               data: imageid,
               headers: { 'X_CSRF_TOKEN': 'patterson' },
               url: 'http://instagramcloneclass.herokuapp.com/images/vote'
            });
            return call;
         }
         const getSingleImage = function() {
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
