/// <reference path="../.definitions/angularjs/angular.d.ts"/>
/// <reference path="about.controller.ts"/>
/// <reference path="about.routes.ts"/>

module About {
  angular.module('about', ['header'])
    .controller('AboutController', AboutController)
    .config(aboutRouteConfig);
}