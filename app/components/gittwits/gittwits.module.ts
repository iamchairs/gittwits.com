/// <reference path="../.definitions/angularjs/angular.d.ts"/>
/// <reference path="gittwits.controller.ts"/>
/// <reference path="gittwits.routes.ts"/>

module GitTwits {
  angular.module('gittwits', [
      'ui.router',

      // components
      'feed',
      'about'
    ])
    .controller('GitTwitsController', GitTwitsController)
    .config(gitTwitsRouteConfig);
}