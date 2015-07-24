module About {
  export function aboutRouteConfig($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider.state('root.about', {
      url: '/about',
      views: {
        header: {
          templateUrl: '/static/header.template',
          controller: 'HeaderController as HeaderVM'
        },
        content: {
          templateUrl: '/static/about.template',
          controller: 'AboutController as AboutVM'
        }
      }
    });
  }
}