/// <reference path="../.definitions/angularjs/angular-resource.d.ts"/>

module Feed {
  export function feedResourceFactory ($resource: ng.resource.IResourceService): ng.resource.IResourceClass<ng.resource.IResource<any>> {
    var list: ng.resource.IActionDescriptor;

    list  = {
        url: '/feed',
        method: 'GET',
        isArray: true
    };

    return $resource('/feed', {}, {
        list: list
    });
  }
}