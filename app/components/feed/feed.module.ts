/// <reference path="../.definitions/angularjs/angular.d.ts"/>
/// <reference path="feed.controller.ts"/>
/// <reference path="feed.routes.ts"/>
/// <reference path="feed.resource.ts"/>
/// <reference path="feed.service.ts"/>
/// <reference path="directives/feed.twit.directive.ts"/>

module Feed {
  angular.module('feed', ['header', 'ngResource'])
    .controller('FeedController', FeedController)
    .factory('FeedResource', feedResourceFactory)
    .service('FeedService', FeedService)
    .directive('twit', twitDirectiveConfig)
    .config(feedRouteConfig);
}