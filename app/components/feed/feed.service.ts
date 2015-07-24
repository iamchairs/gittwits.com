/// <reference path="../.definitions/angularjs/angular.d.ts"/>
/// <reference path="../.definitions/angularjs/angular-resource.d.ts"/>

module Feed {
  export class FeedService {
    FeedResource: any;
    $q: ng.IQService;

    constructor(FeedResource: any, $q: ng.IQService) {
      this.FeedResource = FeedResource;
      this.$q = $q;
    }

    query(params: Object) {
      var defer = this.$q.defer();

      this.FeedResource.list(params, function(res: ng.resource.IResource<any>) {
        defer.resolve(res);
      });

      return defer.promise;
    }
  }
}