/// <reference path="../.definitions/angularjs/angular.d.ts"/>
/// <reference path="header.controller.ts"/>

module Header {
  angular.module('header', [])
    .controller('HeaderController', HeaderController);
}