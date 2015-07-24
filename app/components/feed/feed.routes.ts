module Feed {
  export function feedRouteConfig($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider.state('root.feed', {
      url: '/feed?{s:string}',
      views: {
        header: {
          templateUrl: '/static/header.template',
          controller: 'HeaderController as HeaderVM'
        },
        content: {
          templateUrl: '/static/feed.template',
          controller: 'FeedController as FeedVM'
        }
      }
    });

    $urlRouterProvider.otherwise('/feed');
  }
}