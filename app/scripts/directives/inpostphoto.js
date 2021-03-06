'use strict';

/**
 * @ngdoc directive
 * @name myTumblrApp.directive:inPostPhoto
 * @description
 * # inPostPhoto
 */
angular.module('myTumblrApp').directive('inPostPhoto', function () {
    return {
      template: '<div class="photo-content">'+
                '  <div class="p-content">' +
                '    <img ng-repeat="i in $parent.post.photos | limitTo:5" class="o-{{$index}}" src="{{i.url1280}}" height="100%" />' +
                '  </div> '+
                '  <div class="p-infos">' +
                '    <div class="p-infos-cont">' +
                '      <div class="hashtag-section">'+
                '        <span ng-repeat="h in $parent.post.tags">#{{h}}</span> ' +
                '      </div>'+
                '      <p class="subtitle caption" ng-bind-html="$parent.post.caption"></p>' +
                '    </div>' +
                '  </div>' +
                '</div>',
      restrict: 'E',
      scope: {
         post: '='
      }
    };
  });
