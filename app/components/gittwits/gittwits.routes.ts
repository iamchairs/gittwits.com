module GitTwits {
  export function gitTwitsRouteConfig($stateProvider: any, $locationProvider: any) {
    $stateProvider.state('root', {
      views: {
        root: {
          abstract: true,
          templateUrl: '/static/gittwits.layout.template',
          controller: 'GitTwitsController'
        }
      }
    });
  }
}